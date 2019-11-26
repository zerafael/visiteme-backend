import Sequelize, { Model } from "sequelize";

class Company extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				location: Sequelize.STRING,
				description: Sequelize.STRING
			},
			{
				sequelize
			}
		);
		return this;
	}
}

export default Company;
