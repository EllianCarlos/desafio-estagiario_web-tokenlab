import axios from "axios";
import * as Yup from 'yup';

import User from "../models/User";

// index, show, update, destroy
module.exports = {
  async index(request, response) {
    const users = await User.find();

    return response.json(users);
  },

  async show(request, response) {
    const { id } = request.query;

    const user = await User.find({ id });

    return response.json(user);
  },

  async store(request, response) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
      name: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
      email: Yup.string()
        .required()
        .email(),
      bio: Yup.string(),
      avatar_url: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Os dados inseridos não são valídos.' });
    }

    const username = request.body.username;

    const user = await User.findOne({ username });

    if (!user) {
      const userInto = await User.create(request.body);
      return response.json({ userInto });
    }

    return response.json({
      error: 'Usuário já existentes',
    });
  },

  async update(request, response) {
    const schema = Yup.object().shape({
      username: Yup.string(),
      name: Yup.string(),
      password: Yup.string().min(6),
      email: Yup.string().email(),
      bio: Yup.string(),
      avatar_url: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Os dados inseridos não são valídos.' });
    }

    const id = request.query.id;
    console.log(id)
    const user = await User.findOne({ id });

    if (!user) {
      const userInto = await User.findOneAndUpdate(id, request.body);
      return response.json({ userInto });
    }

    return response.json({
      error: 'Usuário Não Encontrado',
    });
  },

  async delete(request, response) {
    const {id} = request.body;

    const userToDelete = await User.findOne({"_id":id});
    console.log(userToDelete);

    if(!userToDelete) {
      return response.json({
        error:"Usuário não encontrado"
      })
    }

    const user = await User.findOneAndDelete({id});

    return response.json({
      message:`Usuário de id:${id} deletado`,
      userToDelete,
    });

  },
};
