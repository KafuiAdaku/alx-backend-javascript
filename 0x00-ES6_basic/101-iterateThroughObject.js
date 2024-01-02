export default function iterateThroughObject(reportWithIterator) {
  let myString = '';
  for (let idx = 0; idx < reportWithIterator.length; idx += 1) {
    myString += reportWithIterator[idx];
    if (idx < reportWithIterator.length - 1) {
      myString += ' | ';
    }
  }

  return myString;
}
