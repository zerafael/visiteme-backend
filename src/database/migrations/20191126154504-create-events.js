module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("events", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			description: {
				type: Sequelize.STRING
			},
			vacancy: {
				type: Sequelize.INTEGER
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			id_company: {
				type: Sequelize.INTEGER,
				references: {
					model: "companies",
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

	down: queryInterface => {
		return queryInterface.dropTable("events");
	}
};
