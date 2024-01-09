export default function cleanSet(set, startString) {
  const stringArr = [];
  set.forEach((string) => {
    if (startString !== '' && string.includes(startString)) {
      stringArr.push(string.slice(3));
    }
  });
  return stringArr.join('-');
}
