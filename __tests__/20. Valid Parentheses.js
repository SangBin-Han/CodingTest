const { isValid } = require('../leetcode/solved/20. Valid Parentheses');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(isValid("()"), true);
    assert.equal(isValid("()[]{}"), true);
    assert.equal(isValid("(]"), false);
  });
});