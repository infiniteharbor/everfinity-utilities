
import { } from "mocha";

import { expect, should, assert } from "chai";

import Objects from "../src/objects";



describe('Objects.format', () => {
  it('should return xxx', () => {
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
