const { longestCommonPrefix } = require('../leetcode/solved/14. Longest Common Prefix');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(longestCommonPrefix(["flower","flow","flight"]), "fl")
    assert.equal(longestCommonPrefix(["dog","racecar","car"]), "")
  });
});