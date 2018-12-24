
import { } from "mocha";

import { expect, should, assert } from "chai";

import Assert from "../src/assert";



describe('Assert.assertNotNull', () => {
  it('should return xxx', () => {
    expect(Assert.assertNotNull<String>("xxx")).to.equal("xxx");
  });
});



describe('Assert.assertTypeOf', () => {
  it('should return xxx', () => {
    const test: String = "xxx";
    expect(Assert.assertTypeOf<String>(test, 'string')).to.equal(test);
  });
});