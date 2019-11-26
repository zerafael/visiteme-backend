import Event from '../models/Event'

import Subscription from "../models/Subscription";

class SubscriptionStudentController {
	async index(request, response) {
		const { id } = request.params;
		const subscriptions = await Subscription.findAll({
			where: { student_id: id }
		});

		return response.json(subscriptions);
	}

	async store(request, response) {
		const { id_event } = request.body;

		const event = await Event.findOne({ where: { id : id_event } });
		const subscriptionEvent = await Subscription.findAll({ where: { id_event }})

		if(subscriptionEvent.length >= event.vacancy) {
			return response.status(400).json({ error: 'Todas as vagas foram preenchidas'});
		}

		const subscription = await Subscription.create(request.body);

		return response.json(subscription);
	}
}

export default new SubscriptionStudentController();
