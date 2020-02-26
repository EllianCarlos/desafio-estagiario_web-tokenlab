import * as Yup from 'yup';
import {Op} from "sequelize";

import Event from '../models/Event';

class EventController {
  async index(request, response) {
      const eventos = await Event.findAll({where: {
        canceled_at:null,
      }});

      return response.json({eventos});
  }

  async show(request, response) {
    const id = [request.body.id];

    console.log(id);

    const events = await Event.findAll({
      where: {
        [Op.or]:
          [ 
            {
              invited: {
                [Op.overlap]: [id]
              },
            },
            {
              creator: {
                [Op.eq]: id[0]
              }
            }
          ]
        }
      },
    );

    return response.json(events);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      creator: Yup.string().required(),
      name: Yup.string().required(),
      description: Yup.string().required(),
      start: Yup.date().required(),
      end: Yup.date().required(),
      full_day: Yup.bool().required(),
      invited: Yup.array().of(Yup.string()),
    });
    
    if (!(await schema.isValid(request.body))) {
      return response
      .status(400)
      .json({ error: 'Os dados inseridos não são valídos. Seus dados:' + JSON.stringify(request.body) });
    }
    
    const eventExists = await Event.findOne({
      where: {
        creator: request.body.creator,
        start: request.body.start
      }
    }); 
    console.log("AAAAAAAAAA")
    console.log(eventExists);
    
    if (!!eventExists) {
      return response
      .status(400)
      .json({ error: 'Eventos não podem ter a mesma data e o mesmo criador.' });
    }

    const {creator, name, description, start, end, full_day, invited, canceled_at} = request.body;

    const eventoCriado = await Event.create(
      request.body
    );
    
    return response.json({
      "evento criado":eventoCriado
    });

  }

  async update(request, response) {
      const schema = Yup.object().shape({
        name: Yup.string(),
        description: Yup.string(),
        start: Yup.date(),
        end: Yup.date(),
        full_day: Yup.bool(),
        invited: Yup.array().of(Yup.string()),
      });

      if(request.body.creator != null) {
        return response
          .status(400)
          .json({ error: 'Não é possível mudar o criador do evento.' });
      }

      if (!(await schema.isValid(request.body))) {
        return response
          .status(400)
          .json({ error: 'Os dados inseridos não são valídos.' });
      }

    const { id } = request.body;

    const event = await Event.findByPk(id);

    if (event) {
      await event.update(request.body);
      
      return response.json({ event });
    }

    return response.json({
      error: 'Evento Não Encontrado',
    });
  }

  async delete(request, response) {
    const { id } = request.body;

    console.log(id);
    
    const event = await Event.findByPk( id );

    event.canceled_at = new Date();

    await event.save();
    
    return response.json(event + "Removido");
  }
} 


module.exports = new EventController();