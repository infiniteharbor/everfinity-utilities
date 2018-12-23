"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("./assert");
var objects_1 = require("./objects");
var Option = (function () {
    function Option(value) {
        if (value)
            this.value = null;
        else
            this.value = assert_1.default.assertNotNull(value);
    }
    Option.empty = function () {
        var t = this.EMPTY;
        return t;
    };
    Option.of = function (value) {
        return new Option(value);
    };
    Option.ofNullable = function (value) {
        return value ? this.empty : this.of(value);
    };
    Option.prototype.get = function () {
        if (!this.value)
            throw Error("No Such Element Exception!");
        else
            return this.value;
    };
    Option.prototype.isPresent = function () {
        return this.value != null;
    };
    Option.prototype.ifPresent = function (consumer) {
        var _this = this;
        if (this.value != null) {
            (function (target) { return (typeof target === 'function') ? target(_this.value) : target.accept(_this.value); })(consumer);
        }
    };
    Option.prototype.filter = function (predicate) {
        var _this = this;
        assert_1.default.assertNotNull(predicate);
        if (!this.isPresent()) {
            return this;
        }
        else {
            return (function (target) { return (typeof target === 'function')
                ? target(_this.value)
                : target.test(_this.value); })(predicate) ? this : null;
        }
    };
    Option.prototype.orElseGet = function (other) {
        return this.value != null ? this.value : (function (target) { return (typeof target === 'function') ? target() : target.get(); })(other);
    };
    Option.prototype.equals = function (obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Object)) {
            return false;
        }
        var other = obj;
        return objects_1.default.equals(this.value, other.value);
    };
    Option.EMPTY = new Option();
    return Option;
}());
exports.default = Option;
//# sourceMappingURL=option.js.map