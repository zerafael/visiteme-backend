import Subscription from "../models/Subscription";

class SubscriptionEventController {
	async index(request, response) {
		const { id } = request.params;
		const subscriptions = await Subscription.findAll({
			where: { id_event: id }
		});

		return response.json(subscriptions);
	}
}

export default new SubscriptionEventController();
