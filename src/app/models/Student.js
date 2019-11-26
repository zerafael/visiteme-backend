import Sequelize, { Model } from "sequelize";

class Student extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				location: Sequelize.STRING,
				school_name: Sequelize.STRING
			},
			{
				sequelize
			}
		);
		return this;
	}
}

export default Student;
