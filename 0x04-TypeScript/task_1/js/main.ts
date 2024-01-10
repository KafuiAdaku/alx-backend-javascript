// task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};

const teacher1: Teacher = {
  firstName: 'Adzo',
  lastName: 'Domale',
  fullTimeEmployee: false,
  location: 'Ho',
  contract: 'false'
}

// task 2
interface Directors extends Teacher {
  numberofReports: number;
}

const director1: Directors = {
  firstName: 'Adzo',
  lastName: 'Domale',
  fullTimeEmployee: true,
  location: 'Ho',
  numberofReports: 17,
};

console.log(director1);

// task 3
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.slice(0,1)}. ${lastName}`;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// task 4
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

