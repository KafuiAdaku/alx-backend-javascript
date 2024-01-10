export default function cleanSet(set, startString) {
//  const stringArr = [];
  if (startString === undefined || startString === '') {
    return '';
  }

  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
