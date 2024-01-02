export default function createIteratorObject(report) {
  const allEmployees = { ...report.allEmployees };
  const iterable = [];
  for (const department in allEmployees) {
    if (Array.isArray(allEmployees[department])) {
      iterable.push(...allEmployees[department]);
    }
  }

  return iterable;
}
