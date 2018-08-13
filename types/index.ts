import { Promise } from "bluebird";

interface InterfaceUtils {
  wait(duration: number): Promise<boolean>;
}

class Utils implements InterfaceUtils {
  public wait(duration: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, duration);
    });
  }
}
module.exports = Utils;
