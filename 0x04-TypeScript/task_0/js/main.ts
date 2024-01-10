interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  location: 'Volta'
};

const student2: Student = {
  firstName: 'Afi',
  lastName: 'Dumelo',
  age: 30,
  location: 'Aflao',
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
studentList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
