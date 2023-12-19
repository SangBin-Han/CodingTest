const { isPalindrome } = require('../leetcode/solved/9. Palindrome Number');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(isPalindrome(121), true);
    assert.equal(isPalindrome(-121), false);
    assert.equal(isPalindrome(10), false);
  });
});