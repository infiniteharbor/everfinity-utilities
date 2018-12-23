
export default class Objects {

  public static equals(a: any, b: any): boolean {
    return (a == b) || (a != null && this.equals(a, b));
  }
}