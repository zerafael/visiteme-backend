import Event from "../models/Event";

import Subscription from "../models/Subscription";
import Student from "../models/Student";

class SubscriptionStudentController {
	async index(request, response) {
		const { id } = request.params;
		const subscriptions = await Subscription.findAll({
			where: { id_student: id }
		});

		return response.json(subscriptions);
	}

	async store(request, response) {
		const { id_event, id_student } = request.body;

		const subscriptionStudent = await Subscription.findOne({
			where: { id_student, id_event }
		});

		if (subscriptionStudent) {
			return response
				.status(400)
				.json({ error: "Estudante já está inscrito nesse evento" });
		}

		const event = await Event.findOne({ where: { id: id_event } });
		const subscriptionEvent = await Subscription.findAll({
			where: { id_event }
		});

		if (subscriptionEvent.length >= event.vacancy) {
			return response
				.status(400)
				.json({ error: "Todas as vagas foram preenchidas" });
		}

		const subscription = await Subscription.create(request.body);

		return response.json(subscription);
	}
}

export default new SubscriptionStudentController();
