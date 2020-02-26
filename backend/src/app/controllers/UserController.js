import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import axios from "axios";


import User from "../models/User";

// index, show, update, destroy
module.exports = {
  async index(request, response) {
    const users = await User.find();

    return response.json(users);
  },

  async show(request, response) {
    const { _id } = request.body;

    // if (!_id) {
    //   return res
    //     .status(400)
    //     .json({ error: 'Os dados inseridos não são valídos.' });
    // }

    const user = await User.findById(_id);

    return response.json(user);
  },

  async store(request, response) {
    const schema = Yup.object().shape({
      company: Yup.string(),
      name: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      email: Yup.string()
        .required()
        .email(),
      photo_url: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Os dados inseridos não são valídos.' });
    }

    const { 
      company,
      name,
      password,
      email,
      photo_url
    } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      const password_hash = await bcrypt.hash(password, 8);
      const userInto = await User.create({
        company,
        name,
        password:password_hash,
        email,
        photo_url,
      });
      return response.json({ userInto });
    }

    return response.json({
      error: 'Usuário já existentes',
    });
  },

  async update(request, response) {
    const schema = Yup.object().shape({
      company: Yup.string(),
      name: Yup.string(),
      password: Yup.string().min(6),
      email: Yup.string().email().required(),
      photo_url: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Os dados inseridos não são valídos.' });
    }
    const email = request.body.email;
    const user = await User.findOne({email});
    console.log(user)

    if (user) {
      const userInto = await User.findOneAndUpdate({email:email}, request.body, {new:true});
      return response.json({ userInto });
    }

    return response.json({
      error: 'Usuário Não Encontrado',
    });
  },

  async delete(request, response) {
    const { id } = request.body;

    const userToDelete = await User.findOne({_id:id});
    console.log(userToDelete);

    if(!userToDelete) {
      return response.json({
        error:"Usuário não encontrado"
      })
    }

    const user = await User.findOneAndDelete({_id:id});

    return response.json({
      message:`Usuário de id:${id} deletado`,
      userToDelete,
    }); 

  },
};
