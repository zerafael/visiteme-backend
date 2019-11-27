"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"events",
			[
				{
					name: "Tour estudantes São Paulo Facebook",
					description:
						"Tour guiado para os estudantes de São Paulo na sede do Facebook",
					date: "2019-12-29T20:00:00-04:00",
					id_company: 1,
					vacancy: 30,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					name: "Tour colégio Nota 10",
					description:
						"Tour guiado para os estudantes do colégio Nota 10 na sede do Facebook",
					date: "2019-12-07T20:00:00-04:00",
					id_company: 1,
					vacancy: 20,
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					name: "Visitação guiada no Google",
					description:
						"Visitação guiada para os estudantes da rede pública de São Paulo na sede do Google",
					date: "2019-11-28T18:00:00-04:00",
					id_company: 2,
					vacancy: 50,
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("events", null, {});
	}
};
