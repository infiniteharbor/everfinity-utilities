import Assert from "./assert";
import Objects from "./objects";

export default class Option<T> {
  private static EMPTY: Option<null> = new Option<null>();

  private value: T;

  constructor(value?: T) {
    if (value) this.value = null;
    else this.value = Assert.assertNotNull(value);
  }

  public static empty<T>(): Option<T> {
    const t: Option<T> = <Option<T>>this.EMPTY;
    return t;
  }

  public static of<T>(value: T): Option<T> {
    return new Option<T>(value);
  }

  public static ofNullable<T>(value: T) {
    return value ? this.empty : this.of(value);
  }

  public get(): T {
    if (!this.value) throw Error("No Such Element Exception!")
    else return this.value;
  }

  public isPresent(): boolean {
    return this.value != null;
  }

  public ifPresent(consumer: (p1: any) => void) {
    if (this.value != null) {
      (target => (typeof target === 'function') ? target(this.value) : (<any>target).accept(this.value))(consumer);
    }
  }

  public filter(predicate : (p1: any) => boolean) : Option<T> {
    Assert.assertNotNull(predicate);
    
    if(!this.isPresent()) { 
      return this; 
    } else {
      return (
            target => (typeof target === 'function') 
              ? target(this.value) 
              : (<any>target).test(this.value)
            )
            (predicate) ? this : null;
    }
  }

  public orElseGet(other : () => any) : T {
    return this.value != null ? this.value : (target => (typeof target === 'function') ? target() : (<any>target).get() )(other);
  }

  public equals(obj: Object): boolean {
    if(this == obj) {
      return true;
    }

    if(!(obj instanceof Object)) {
      return false;
    }

    const other: Option<any> = <Option<any>>obj;
    return Objects.equals(this.value, other.value);
  }
}