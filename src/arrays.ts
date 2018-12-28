export default class Arrays {


  public static stream<T>(array: T[], start?:number, end?: number) {

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