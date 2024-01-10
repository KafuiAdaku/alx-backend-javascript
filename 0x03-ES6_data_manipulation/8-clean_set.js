export default function cleanSet(set, startString) {
//  const stringArr = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  return [...set]
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
