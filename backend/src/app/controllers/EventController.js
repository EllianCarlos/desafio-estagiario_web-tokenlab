// import axios from 'axios';
import * as Yup from 'yup';
// import Sequelize from "sequelize";

import Event from '../models/Event';

class EventController {
  async index(request, response) {
      // const eventos = await Event.findAll({
      //   where: { creator: request.query.id },
      //   order: ['date'],
      // });
      const eventos = await Event.findAll();

      return response.json({eventos});
  }

  async show(request, response) {
    const { id } = request.query;

    const user = await User.find({ id });

    return response.json(user);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      creator: Yup.string().required(),
      name: Yup.string().required(),
      description: Yup.string().required(),
      start: Yup.date().required(),
      end: Yup.date().required(),
      full_day: Yup.bool()
    });

    
    if (!(await schema.isValid(request.body))) {
      return response
      .status(400)
      .json({ error: 'Os dados inseridos não são valídos.' });
    }
    const {creator, name, description, start, end, full_day} = request.body;
    
    const eventoCriado = Event.create(request.body);
    console.log(request.body);
    // await eventoCriado.save();
    
    console.log(eventoCriado)
    
    return response.json({
      "evento criado":eventoCriado
    });

  }

  async update(request, response) {
      const schema = Yup.object().shape({
        
      });

      if (!(await schema.isValid(request.body))) {
        return response
          .status(400)
          .json({ error: 'Os dados inseridos não são valídos.' });
      }

      if (!user) {
        const userInto = await User.findOneAndUpdate(request.body);
        return response.json({ userInto });
      }

      return response.json({
        error: 'Usuário Não Encontrado',
      });

      
  }

  async delete(request, response) {
    const { id } = request.query;

    const user = await User.findAndDelete({ id });
  }
} 


module.exports = new EventController();