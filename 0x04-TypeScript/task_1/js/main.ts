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
