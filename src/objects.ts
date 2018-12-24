
export default class Objects {

  public static equals(a: any, b: any): boolean {
    return (a == b) || (a != null && this.equals(a, b));
  }

  public static format(str: string, ...args: any): string {
    return str.replace(/{(\d+)}/g, (match, number) => { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}