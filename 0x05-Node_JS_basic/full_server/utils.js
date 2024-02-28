const fs = require('fs');
function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error(err));
                return;
            }
            const lines = data.split('\n').filter((line) => line.length > 0);
            const students = lines.slice(1); // Exclude header
            const fields = {};
            for (const student of students) {
                const [firstname, , , field] = student.split(',');
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            }
            resolve(fields);
        });
    });
}
module.exports = readDatabase;
