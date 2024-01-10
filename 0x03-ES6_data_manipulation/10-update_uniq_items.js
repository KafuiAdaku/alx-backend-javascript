export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const newMap = new Map();
  map.forEach((val, key) => {
    newMap.set(key, val === 1 ? 100 : val);
  });
  map.clear();
  newMap.forEach((val, key) => {
    map.set(key, val);
  });
  return map;
}
