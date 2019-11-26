import Event from "../models/Event";
import Company from "../models/Company";

class EventController {
	async index(request, response) {
		const events = await Event.findAll();

		return response.json(events);
	}

	async indexByCompany(request, response) {
		const { id } = request.params;

		const events = await Event.findAll({ where: { id_company: id } });

		return response.json(events);
	}

	async store(request, response) {
		const event = await Event.create(request.body);

		const company = await Company.findOne({ where : { id : request.body.id }});

		if(!company) {
			return response.status(400).json({ error: 'Company does not found!'});
		}

		return response.json(event);
	}
}

export default new EventController();
