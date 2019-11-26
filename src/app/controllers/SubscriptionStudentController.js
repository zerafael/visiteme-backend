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
		const subscription = await Subscription.create(request.body);

		return response.json(subscription);
	}
}

export default new SubscriptionStudentController();
