
export class DefaultPropertyValues {
  public numberValue: number = -1234;
  public boolValue: boolean = true;
  public strValue: string = "abcd";
  public arrValue: any[] = [];
  public fnValue: () => void = () => {};

  constructor(
    numberValue?: number, boolValue?: boolean, strValue?: string, 
    arrValue?: any[], fnValue?: () => void) 
  {
    if(numberValue) { this.numberValue = numberValue; }
    if(boolValue) { this.boolValue = boolValue; }
    if(strValue) { this.strValue = strValue; }
    if(arrValue) { this.arrValue = arrValue; }
    if(fnValue) { this.fnValue = fnValue; }
  }
}

/**
 * Specific utilities meant for objects and miscelaneous types.
 */
export default class Objects {

  public static equals(a: any, b: any): boolean {
    return (a === b) || JSON.stringify(a) === JSON.stringify(b);
  }

  public static format(str: string, ...args: any): string {
    return str.replace(/{(\d+)}/g, (match, number) => { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };


  public static setProperty<T>( obj: T, key: string, defaultValues: DefaultPropertyValues ): void {
    if(typeof obj[key] === "string") {
      obj[key] = defaultValues.strValue;
    }
  }
}