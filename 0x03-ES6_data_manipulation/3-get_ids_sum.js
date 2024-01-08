export default function getStudentIdsSum(getListStudents) {
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-return-assign */
  return getListStudents.reduce((accumulator, currVal) => accumulator += currVal.id, 0);
}
