"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("./exceptions");
var Assert = (function () {
    function Assert() {
    }
    Assert.assertNotNull = function (t) {
        if (!t)
            throw new exceptions_1.NullPointerException("Null Pointer Exception!");
        else
            return t;
    };
    Assert.assertTypeOf = function (t, expected) {
        if (!(typeof t === expected)) {
            throw new exceptions_1.AssertionException("Woah, I didn't expect a " + typeof t + ", it should be " + expected + " ");
        }
        else {
            return t;
        }
    };
    return Assert;
}());
exports.default = Assert;
//# sourceMappingURL=assert.js.map