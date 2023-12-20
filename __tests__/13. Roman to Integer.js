const { romanToInt } = require('../leetcode/solved/13. Roman to Integer');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(romanToInt("III"), 3);
    assert.equal(romanToInt("LVIII"), 58);
    assert.equal(romanToInt("MCMXCIV"), 1994);
  });
});