import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import authConfig from '../../config/auth';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required()
                .email(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ error: 'Os dados inseridos não são valídos.' });
        }

        const { email, password } = req.body;

        console.log(email);
        
        const user = await User.findOne({email});
        
        console.log(user);

        if (!user) {
            return res.status(404).json({ error: 'O usuário não existe.' });
        }

        const check = await bcrypt.compare(password, user.password);

        if (!check) {
            return res.status(400).json({ error: 'A senha não esta correta.' });
        }

        const { _id, name, photo_url } = user;

        return res.json({
            Admin: {
                _id,
                name,
                email,
                photo_url,
            },
            token: jwt.sign({ _id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();