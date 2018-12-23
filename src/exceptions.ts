//Arithmetic Exception
//It is thrown when an exceptional condition has occurred in an arithmetic operation.
export class ArithmeticException extends Error {}
//ArrayIndexOutOfBoundException
//It is thrown to indicate that an array has been accessed with an illegal index. The index is either negative or greater than or equal to the size of the array.
export class ArrayIndexOutOfBoundException extends Error {}
//ClassNotFoundException
//This Exception is raised when we try to access a class whose definition is not found
export class ClassNotFoundException extends Error {}
//FileNotFoundException
//This Exception is raised when a file is not accessible or does not open.
export class FileNotFoundException extends Error {}
//IOException
//It is thrown when an input-output operation failed or interrupted
export class IOException extends Error {}
//InterruptedException
//It is thrown when a thread is waiting , sleeping , or doing some processing , and it is interrupted.
export class InterruptedException extends Error {}
//NoSuchFieldException
//It is thrown when a class does not contain the field (or variable) specified
export class NoSuchFieldException extends Error {}
//NoSuchMethodException
//It is thrown when accessing a method which is not found.
export class NoSuchMethodException extends Error {}
//NullPointerException
//This exception is raised when referring to the members of a null object. Null represents nothing
export class NullPointerException extends Error {}
//NumberFormatException
//This exception is raised when a method could not convert a string into a numeric format.
export class NumberFormatException extends Error {}
//RuntimeException
//This represents any exception which occurs during runtime.
export class RuntimeException extends Error {}
//StringIndexOutOfBoundsException
//It is thrown by String class methods to indicate that an index is either negative than the size of the string
export class StringIndexOutOfBoundsException extends Error {}
//AssertionException
//It is thrown when an assertion fails
export class AssertionException extends Error {}
//IllegalArgumentException
//Thrown to indicate that a method has been passed an illegal or inappropriate arguement
export class IllegalArgumentException extends Error {}