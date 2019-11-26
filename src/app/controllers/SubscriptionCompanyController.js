import Subscription from "../models/Subscription";

class SubscriptionCompanyController {
	async index(request, response) {
		const { id } = request.params;
		const subscriptions = Subscription.findAll({ where: { company_id: id } });

		return response.json(subscriptions);
	}
}

export default new SubscriptionCompanyController();
