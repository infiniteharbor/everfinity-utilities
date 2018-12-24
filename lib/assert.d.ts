export default class Assert {
    static assertNotNull<T>(t: T): T;
    static assertTypeOf<T>(t: T, expected: string): T;
}
