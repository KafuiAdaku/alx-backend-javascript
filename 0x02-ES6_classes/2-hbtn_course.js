export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('students must be a list of strings');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('students must be a list of strings');
      }
    });
    this._name = name;
    this._length = length;
    this._students = [...students];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError();
      }
    });
    this._students = students;
  }
}
