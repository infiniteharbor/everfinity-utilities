import {} from "mocha";

import { expect, should, assert } from "chai";

import { List  } from "../src/index";

describe('List type', () => {
  it('should type out a list', () => {
    const l: List<String> = ["a", "b", "c"]; 
    console.log(l);
    expect(JSON.stringify(l)).to.equal(JSON.stringify(l));
  });
});

