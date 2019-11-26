import Sequelize from "sequelize";

// import User from '../app/models/User';
import Company from "../app/models/Company";
import Student from "../app/models/Student";
import Event from "../app/models/Event";
import Subscription from "../app/models/Subscription";

import databaseConfig from "../config/database";

const models = [Company, Student, Event, Subscription];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);

		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
