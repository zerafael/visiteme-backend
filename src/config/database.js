require("dotenv/config");

module.exports = {
	dialect: "postgres",
	host: process.env.DB_HOST || "ec2-23-21-91-183.compute-1.amazonaws.com",
	port: process.env.DB_PORT || 5432,
	username: process.env.DB_USER || "omyvlabpehwonk",
	password:
		process.env.DB_PASS ||
		"9ffcbdefc1f6a0cec6f79baaaf750f4f1a3d423a9e6d438712a2403b392c6e99",
	database: process.env.DB_NAME || "ddq9vuo03a1h0a",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true
	}
};
