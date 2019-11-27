"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"students",
			[
				{
					name: "John Doe",
					email: "john@gmail.com",
					location: "Rua São josé, 432, Campo Grande/MS",
					school_name: "Bionatus",
					password: "123",
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					name: "Rafaela Santos",
					email: "rafa@gmail.com",
					location: "Avenida Afonso Pena, 2032, São Paulo/SP",
					school_name: "Dom Bosco",
					password: "123",
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("students", null, {});
	}
};
