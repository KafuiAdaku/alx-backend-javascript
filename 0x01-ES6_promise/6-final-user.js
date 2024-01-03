import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const result = [];
      for (const obj of results) {
        if (obj.status === 'fulfiled') {
          result.push({ status: obj.status, value: obj.value });
        } else {
          result.push({ status: obj.statsu, value: `${obj.reason}` });
        }
      }
      return result;
    });
}
