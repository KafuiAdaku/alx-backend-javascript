export default function cleanSet(set, startString) {
  const stringArr = [];
  if (startString === undefined || startString === '') {
    return '';
  }
  set.forEach((string) => {
    if (string.startsWith(startString)) {
      stringArr.push(string.slice(startString.length));
    }
  });
  return stringArr.join('-');
}
