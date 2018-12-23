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
    Assert.assertInstanceOf = function (t, clazz) {
        if (!(t instanceof clazz)) {
            throw new exceptions_1.AssertionException("InstanceOf Assertion Failed!");
        }
        else {
            return t;
        }
    };
    return Assert;
}());
exports.default = Assert;
//# sourceMappingURL=assert.js.map