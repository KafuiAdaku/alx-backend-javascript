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
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'Ho',
  contract: 'false'
}

console.log(teacher1);
