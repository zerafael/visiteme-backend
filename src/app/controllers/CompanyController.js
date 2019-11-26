import Company from "../models/Company";

class CompanyController {
	async index(request, response) {
		const companies = await Company.findAll();

		return response.json(companies);
	}

	async getCompany(request, response) {
		const { email } = request.body;
		const companies = await Company.findAll({ where: { email } });

		return response.json(companies);
	}

	async store(request, response) {
		const company = await Company.create(request.body);

		return response.json(company);
	}
}

export default new CompanyController();
