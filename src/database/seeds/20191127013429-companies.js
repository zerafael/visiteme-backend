"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"companies",
			[
				{
					name: "Facebook",
					description: "Facebook",
					email: "visiteme@facebook.com.br",
					location: "Rua Leopoldo Couto, 700, São Paulo / SP",
					password: "123",
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					name: "Google",
					description: "Google",
					email: "visiteme@google.com.br",
					location: "Avenida Faria Lima, 3467, São Paulo / SP",
					password: "123",
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("companies", null, {});
	}
};
