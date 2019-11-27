"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"subscriptions",
			[
				{
					id_student: 2,
					id_event: 2,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id_student: 2,
					id_event: 4,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id_student: 3,
					id_event: 4,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id_student: 2,
					id_event: 3,
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("subscriptions", null, {});
	}
};
