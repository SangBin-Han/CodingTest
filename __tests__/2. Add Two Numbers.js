const { addTwoNumbers } = require('../leetcode/2.%20Add%20Two%20Numbers');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {

    assert.equal(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]);
    assert.equal(addTwoNumbers([0], [0]), [0]);
    assert.equal(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
  });
});