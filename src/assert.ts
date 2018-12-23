import { NullPointerException, AssertionException } from "./exceptions";

export default class Assert {

  static assertNotNull<T>(t: T): T {
    if (!t) throw new NullPointerException("Null Pointer Exception!");
    else return t;
  }


  static assertInstanceOf<T>(t: T, clazz: any): T {
    if( !(t instanceof clazz) ){
      throw new AssertionException("InstanceOf Assertion Failed!")
    } else {
      return t;
    }
  }
}