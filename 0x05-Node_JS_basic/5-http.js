// const countStudents = require('./3-read_file_async');
const fs = require('fs');
const http = require('http');

const dbPath = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    if (path) {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
          // return;
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

        let output = '';
        for (const [field, students] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
        resolve(output);
      });
    }
  });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dbPath)
      .then((data) => {
        const output = data.slice(0, -1);
        res.end(output);
      })
      .catch(() => {
        res.statusCode = 500;
        res.write('Cannot load the database');
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end('Invalid request');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
module.exports = app;
