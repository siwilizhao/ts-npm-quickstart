'use strict';

var bluebird = require('bluebird');

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.wait = function (duration) {
        return new bluebird.Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, duration);
        }).catch(function (error) {
            console.log(error);
            return false;
        });
    };
    return Utils;
}());
module.exports = Utils;
