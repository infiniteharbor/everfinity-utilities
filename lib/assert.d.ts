export default class Assert {
    static assertNotNull<T>(t: T): T;
    static assertInstanceOf<T>(t: T, clazz: any): T;
}
