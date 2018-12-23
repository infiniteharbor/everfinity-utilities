"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objects = (function () {
    function Objects() {
    }
    Objects.equals = function (a, b) {
        return (a == b) || (a != null && this.equals(a, b));
    };
    return Objects;
}());
exports.default = Objects;
//# sourceMappingURL=objects.js.map