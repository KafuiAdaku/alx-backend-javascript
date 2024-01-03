export default function uploadPhoto(filename) {
  /* eslint-disable no-unused-vars */
  return new Promise((resolve, reject) => {
    const error = new Error(`${filename} cannot be processed`);
    reject(error);
  });
}
