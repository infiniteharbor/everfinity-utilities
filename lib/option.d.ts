export default class Option<T> {
    private static EMPTY;
    private value;
    constructor(value?: T);
    static empty<T>(): Option<T>;
    static of<T>(value: T): Option<T>;
    static ofNullable<T>(value: T): typeof Option.empty | Option<T>;
    get(): T;
    isPresent(): boolean;
    ifPresent(consumer: (p1: any) => void): void;
    filter(predicate: (p1: any) => boolean): Option<T>;
    orElseGet(other: () => any): T;
    equals(obj: Object): boolean;
}
