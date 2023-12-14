const { twoSum } = require('../leetcode/1. TwoSum.js');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(twoSum([3,2,4], 6), [1,2])
  });
});