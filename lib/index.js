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
        });
    };
    return Utils;
}());
module.exports = Utils;
