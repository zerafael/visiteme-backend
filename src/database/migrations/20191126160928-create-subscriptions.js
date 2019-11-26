module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("subscriptions", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			id_event: {
				type: Sequelize.INTEGER,
				references: {
					model: "events",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
				allowNull: false
			},
			id_student: {
				type: Sequelize.INTEGER,
				references: {
					model: "students",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("subscriptions");
	}
};
