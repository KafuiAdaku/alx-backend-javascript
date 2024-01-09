export default function cleanSet(set, startString) {
  const stringArr = [];
  set.forEach((string) => {
    if (startString !== '' && string.startsWith(startString)) {
      stringArr.push(string.slice(startString.length));
    }
  });
  return stringArr.join('-');
}
