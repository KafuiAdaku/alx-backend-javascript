export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((filtStud) => {
      const gradeObj = newGrades.find((newGrade) => newGrade.studentId === filtStud.id);
      const gradeToUpdate = gradeObj ? gradeObj.grade : 'N/A';
      return { ...filtStud, grade: gradeToUpdate };
    });
}
