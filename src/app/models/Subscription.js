import { Model } from "sequelize";

class Subscription extends Model {
	static init(sequelize) {
		super.init({}, { sequelize });
		return this;
	}

	static associate(models) {
		this.belongsTo(models.Event, { foreignKey: "id_event", as: "event" });
		this.belongsTo(models.Student, { foreignKey: "id_student", as: "student" });
	}
}

export default Subscription;
