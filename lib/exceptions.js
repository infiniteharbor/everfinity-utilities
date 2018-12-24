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
var Throwable = (function (_super) {
    __extends(Throwable, _super);
    function Throwable(message, name) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        return _this;
    }
    return Throwable;
}(Error));
exports.Throwable = Throwable;
var ArithmeticException = (function (_super) {
    __extends(ArithmeticException, _super);
    function ArithmeticException(message, name) {
        if (name === void 0) { name = "ArithmeticException"; }
        return _super.call(this, message, name) || this;
    }
    return ArithmeticException;
}(Throwable));
exports.ArithmeticException = ArithmeticException;
var ArrayIndexOutOfBoundException = (function (_super) {
    __extends(ArrayIndexOutOfBoundException, _super);
    function ArrayIndexOutOfBoundException(message, name) {
        if (name === void 0) { name = "ArrayIndexOutOfBoundException"; }
        return _super.call(this, message, name) || this;
    }
    return ArrayIndexOutOfBoundException;
}(Throwable));
exports.ArrayIndexOutOfBoundException = ArrayIndexOutOfBoundException;
var ClassNotFoundException = (function (_super) {
    __extends(ClassNotFoundException, _super);
    function ClassNotFoundException(message, name) {
        if (name === void 0) { name = "ClassNotFoundException"; }
        return _super.call(this, message, name) || this;
    }
    return ClassNotFoundException;
}(Throwable));
exports.ClassNotFoundException = ClassNotFoundException;
var FileNotFoundException = (function (_super) {
    __extends(FileNotFoundException, _super);
    function FileNotFoundException(message, name) {
        if (name === void 0) { name = "FileNotFoundException"; }
        return _super.call(this, message, name) || this;
    }
    return FileNotFoundException;
}(Throwable));
exports.FileNotFoundException = FileNotFoundException;
var IOException = (function (_super) {
    __extends(IOException, _super);
    function IOException(message, name) {
        if (name === void 0) { name = "IOException"; }
        return _super.call(this, message, name) || this;
    }
    return IOException;
}(Throwable));
exports.IOException = IOException;
var InterruptedException = (function (_super) {
    __extends(InterruptedException, _super);
    function InterruptedException(message, name) {
        if (name === void 0) { name = "InterruptedException"; }
        return _super.call(this, message, name) || this;
    }
    return InterruptedException;
}(Throwable));
exports.InterruptedException = InterruptedException;
var NoSuchFieldException = (function (_super) {
    __extends(NoSuchFieldException, _super);
    function NoSuchFieldException(message, name) {
        if (name === void 0) { name = "NoSuchFieldException"; }
        return _super.call(this, message, name) || this;
    }
    return NoSuchFieldException;
}(Throwable));
exports.NoSuchFieldException = NoSuchFieldException;
var NoSuchMethodException = (function (_super) {
    __extends(NoSuchMethodException, _super);
    function NoSuchMethodException(message, name) {
        if (name === void 0) { name = "NoSuchMethodException"; }
        return _super.call(this, message, name) || this;
    }
    return NoSuchMethodException;
}(Throwable));
exports.NoSuchMethodException = NoSuchMethodException;
var NullPointerException = (function (_super) {
    __extends(NullPointerException, _super);
    function NullPointerException(message, name) {
        if (name === void 0) { name = "NullPointerException"; }
        return _super.call(this, message, name) || this;
    }
    return NullPointerException;
}(Throwable));
exports.NullPointerException = NullPointerException;
var NumberFormatException = (function (_super) {
    __extends(NumberFormatException, _super);
    function NumberFormatException(message, name) {
        if (name === void 0) { name = "NumberFormatException"; }
        return _super.call(this, message, name) || this;
    }
    return NumberFormatException;
}(Throwable));
exports.NumberFormatException = NumberFormatException;
var RuntimeException = (function (_super) {
    __extends(RuntimeException, _super);
    function RuntimeException(message, name) {
        if (name === void 0) { name = "RuntimeException"; }
        return _super.call(this, message, name) || this;
    }
    return RuntimeException;
}(Throwable));
exports.RuntimeException = RuntimeException;
var StringIndexOutOfBoundsException = (function (_super) {
    __extends(StringIndexOutOfBoundsException, _super);
    function StringIndexOutOfBoundsException(message, name) {
        if (name === void 0) { name = "StringIndexOutOfBoundsException"; }
        return _super.call(this, message, name) || this;
    }
    return StringIndexOutOfBoundsException;
}(Throwable));
exports.StringIndexOutOfBoundsException = StringIndexOutOfBoundsException;
var AssertionException = (function (_super) {
    __extends(AssertionException, _super);
    function AssertionException(message, name) {
        if (name === void 0) { name = "AssertionException"; }
        return _super.call(this, message, name) || this;
    }
    return AssertionException;
}(Throwable));
exports.AssertionException = AssertionException;
var IllegalArgumentException = (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException(message, name) {
        if (name === void 0) { name = "IllegalArgumentException"; }
        return _super.call(this, message, name) || this;
    }
    return IllegalArgumentException;
}(Throwable));
exports.IllegalArgumentException = IllegalArgumentException;
var ValidationException = (function (_super) {
    __extends(ValidationException, _super);
    function ValidationException(message, name) {
        if (name === void 0) { name = "ValidationException"; }
        return _super.call(this, message, name) || this;
    }
    return ValidationException;
}(Throwable));
exports.ValidationException = ValidationException;
//# sourceMappingURL=exceptions.js.map