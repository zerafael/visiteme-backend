import Sequelize, { Model } from "sequelize";

class Event extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				description: Sequelize.STRING,
				available_vacancy: Sequelize.INTEGER,
				filled_vacancy: Sequelize.INTEGER,
				date: Sequelize.DATE
			},
			{
				sequelize
			}
		);
		return this;
	}

	static associate(models) {
		this.belongsTo(models.Company, { foreignKey: "id_company", as: "company" });
	}
}

export default Event;
