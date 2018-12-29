
import { } from "mocha";

import { expect, should, assert } from "chai";

import Objects from "../src/objects";

describe('Objects.format', () => {
  it('should return a formated string', () => {
    const f1 = "abc";
    const f2 = "def";
    const f3 = "ghi";

    const test = Objects.format("Lets test {1} and {0} and {2}", f1, f2, f3); 
    const result = `Lets test ${f2} and ${f1} and ${f3}`;
    console.log("test string", test);
    console.log("result should be", result);
    expect(test).to.equal(result);
  });
});


describe('Objects.populate', () => {
  it('should return a popluated object', () => {

    class Test {
      public a: string;
      public b: string;
      public c: string;
    }

    let obj: Test = new Test();

    console.log(Object.keys(obj));
    console.log(Object.getOwnPropertyNames(obj));
    console.log(Object.getOwnPropertySymbols(obj));


    console.log(JSON.stringify(obj));

  });
});