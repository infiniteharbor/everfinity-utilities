export default class Arrays {
  public static isArray(test: any) {
    return Array.isArray(test);
  }
}

export class Repeater<T> {
  public hasNext: boolean;
  public next: T;
  public forEachRemaining(action: () => any) {
    while(this.hasNext) {
      action.apply(this);
    }
  }
}