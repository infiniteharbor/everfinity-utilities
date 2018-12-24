/**
 * Throwable extends Node Error
 * Allows custom errors to initialize a name for themselves
 */
export class Throwable extends Error {
  constructor(message, name) {
    super(message);
    this.name = name;
  }
}

/**
 * Arithmetic Exception
 * It is thrown when an exceptional condition has occurred in an arithmetic operation.
 */
export class ArithmeticException extends Throwable { constructor(message, name = "ArithmeticException") { super(message, name); } }
//ArrayIndexOutOfBoundException
//It is thrown to indicate that an array has been accessed with an illegal index. The index is either negative or greater than or equal to the size of the array.
export class ArrayIndexOutOfBoundException extends Throwable { constructor(message, name = "ArrayIndexOutOfBoundException") { super(message, name); } }
//ClassNotFoundException
//This Exception is raised when we try to access a class whose definition is not found
export class ClassNotFoundException extends Throwable { constructor(message, name = "ClassNotFoundException") { super(message, name); } }
//FileNotFoundException
//This Exception is raised when a file is not accessible or does not open.
export class FileNotFoundException extends Throwable { constructor(message, name = "FileNotFoundException") { super(message, name); } }
//IOException
//It is thrown when an input-output operation failed or interrupted
export class IOException extends Throwable { constructor(message, name = "IOException") { super(message, name); } }
//InterruptedException
//It is thrown when a thread is waiting , sleeping , or doing some processing , and it is interrupted.
export class InterruptedException extends Throwable { constructor(message, name = "InterruptedException") { super(message, name); } }
//NoSuchFieldException
//It is thrown when a class does not contain the field (or variable) specified
export class NoSuchFieldException extends Throwable { constructor(message, name = "NoSuchFieldException") { super(message, name); } }
//NoSuchMethodException
//It is thrown when accessing a method which is not found.
export class NoSuchMethodException extends Throwable { constructor(message, name = "NoSuchMethodException") { super(message, name); } }
//NullPointerException
//This exception is raised when referring to the members of a null object. Null represents nothing
export class NullPointerException extends Throwable { constructor(message, name = "NullPointerException") { super(message, name); } }
//NumberFormatException
//This exception is raised when a method could not convert a string into a numeric format.
export class NumberFormatException extends Throwable { constructor(message, name = "NumberFormatException") { super(message, name); } }
//RuntimeException
//This represents any exception which occurs during runtime.
export class RuntimeException extends Throwable { constructor(message, name = "RuntimeException") { super(message, name); } }
//StringIndexOutOfBoundsException
//It is thrown by String class methods to indicate that an index is either negative than the size of the string
export class StringIndexOutOfBoundsException extends Throwable { constructor(message, name = "StringIndexOutOfBoundsException") { super(message, name); } }
//AssertionException
//It is thrown when an assertion fails
export class AssertionException extends Throwable { constructor(message, name = "AssertionException") { super(message, name); } }
//IllegalArgumentException
//Thrown to indicate that a method has been passed an illegal or inappropriate arguement
export class IllegalArgumentException extends Throwable { constructor(message, name = "IllegalArgumentException") { super(message, name); } }
//IllegalArgumentException
//Thrown to indicate that a method has been passed an illegal or inappropriate arguement
export class ValidationException extends Throwable { constructor(message, name = "ValidationException") { super(message, name); } }

