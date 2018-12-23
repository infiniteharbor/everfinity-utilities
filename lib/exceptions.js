"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArithmeticException = (function (_super) {
    __extends(ArithmeticException, _super);
    function ArithmeticException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArithmeticException;
}(Error));
exports.ArithmeticException = ArithmeticException;
var ArrayIndexOutOfBoundException = (function (_super) {
    __extends(ArrayIndexOutOfBoundException, _super);
    function ArrayIndexOutOfBoundException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArrayIndexOutOfBoundException;
}(Error));
exports.ArrayIndexOutOfBoundException = ArrayIndexOutOfBoundException;
var ClassNotFoundException = (function (_super) {
    __extends(ClassNotFoundException, _super);
    function ClassNotFoundException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClassNotFoundException;
}(Error));
exports.ClassNotFoundException = ClassNotFoundException;
var FileNotFoundException = (function (_super) {
    __extends(FileNotFoundException, _super);
    function FileNotFoundException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileNotFoundException;
}(Error));
exports.FileNotFoundException = FileNotFoundException;
var IOException = (function (_super) {
    __extends(IOException, _super);
    function IOException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IOException;
}(Error));
exports.IOException = IOException;
var InterruptedException = (function (_super) {
    __extends(InterruptedException, _super);
    function InterruptedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InterruptedException;
}(Error));
exports.InterruptedException = InterruptedException;
var NoSuchFieldException = (function (_super) {
    __extends(NoSuchFieldException, _super);
    function NoSuchFieldException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoSuchFieldException;
}(Error));
exports.NoSuchFieldException = NoSuchFieldException;
var NoSuchMethodException = (function (_super) {
    __extends(NoSuchMethodException, _super);
    function NoSuchMethodException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoSuchMethodException;
}(Error));
exports.NoSuchMethodException = NoSuchMethodException;
var NullPointerException = (function (_super) {
    __extends(NullPointerException, _super);
    function NullPointerException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NullPointerException;
}(Error));
exports.NullPointerException = NullPointerException;
var NumberFormatException = (function (_super) {
    __extends(NumberFormatException, _super);
    function NumberFormatException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberFormatException;
}(Error));
exports.NumberFormatException = NumberFormatException;
var RuntimeException = (function (_super) {
    __extends(RuntimeException, _super);
    function RuntimeException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RuntimeException;
}(Error));
exports.RuntimeException = RuntimeException;
var StringIndexOutOfBoundsException = (function (_super) {
    __extends(StringIndexOutOfBoundsException, _super);
    function StringIndexOutOfBoundsException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StringIndexOutOfBoundsException;
}(Error));
exports.StringIndexOutOfBoundsException = StringIndexOutOfBoundsException;
var AssertionException = (function (_super) {
    __extends(AssertionException, _super);
    function AssertionException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AssertionException;
}(Error));
exports.AssertionException = AssertionException;
var IllegalArgumentException = (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalArgumentException;
}(Error));
exports.IllegalArgumentException = IllegalArgumentException;
//# sourceMappingURL=exceptions.js.map