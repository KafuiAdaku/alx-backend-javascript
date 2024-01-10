export default function cleanSet(set, startString) {
//  const stringArr = [];
  if (startString === undefined || startString === '') {
    return '';
  }

  return [...set]
    .filter((str) => (str ? str.startsWith(startString) : ''))
    .map((str) => (str ? str.slice(startString.length) : ''))
    .join('-');
/*
  set.forEach((string) => {
    if (string.startsWith(startString)) {
      stringArr.push(string.slice(startString.length));
    }
  });
  return stringArr.join('-');
*/
}
