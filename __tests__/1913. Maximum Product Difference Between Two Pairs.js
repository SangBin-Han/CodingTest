const { maxProductDifference } = require('../leetcode/1913. Maximum Product Difference Between Two Pairs');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(maxProductDifference([5,6,2,7,4]), 34);
    assert.equal(maxProductDifference([4,2,5,9,7,4,8]), 64);
  });
});