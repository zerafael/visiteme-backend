import Student from "../models/Student";

class StudentController {
	async index(request, response) {
		const students = await Student.findAll();

		return response.json(students);
	}

	async indexOne(request, response) {
		const student = await Student.findOne({
			where: { email: request.body.email }
		});

		return response.json(student);
	}

	async store(request, response) {
		const student = await Student.create(request.body);

		return response.json(student);
	}
}

export default new StudentController();
