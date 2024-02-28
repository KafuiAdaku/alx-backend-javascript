const { response } = require('../../6-http_express');
const readPage = require('../utils/readPage');
class StudentController {
    static getAllStudents(request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        readPage(process.argv[2].toString())
            .then((data) => {
                response.write('This is the list of our students\n');
                const sortedData = Object.keys(data).sort((a, b) => a.toLowerCase().localeCampare(b.toLowerCase()))
                    .reduce((acc, key) => {
                        acc[key] = data[key];
                        return acc;
                    }, {});
                for (const [field, students] of Object.entries(sortedData)) {
                    response.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
                }
                response.end();
            })
            .catch(() => {
                response.statusCode = 500;
                response.end('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(request, response) {
        response.statusCode = 200;

    }
}