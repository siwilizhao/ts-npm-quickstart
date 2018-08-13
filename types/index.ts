import { Promise } from "bluebird";

interface UtilsInterface {
  wait(duration: Number): Promise<boolean>;
}

class Utils implements UtilsInterface {
  constructor() {}
  wait(duration: Number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, duration);
    }).catch(error => {
      console.log(error);
      return false;
    });
  }
}
module.exports = Utils;
