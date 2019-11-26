import Sequelize, { Model } from "sequelize";

class Event extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				description: Sequelize.STRING,
				date: Sequelize.DATE
			},
			{
				sequelize
			}
		);
		return this;
	}
}

export default Event;
