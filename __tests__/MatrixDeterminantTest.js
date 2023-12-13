const { MatrixDeterminant } = require('../codewars/4kyu/MatrixDeterminant.js');
const { assert } = require('chai');

describe("Tests", function () {
  it("test", function () {
    m1 = [
      [4, 6], 
      [3, 8]
    ]
    m5 = [
      [2, 4, 2], 
      [3, 1, 1], 
      [1, 2, 0]]
      

    assert.strictEqual(MatrixDeterminant([[1]]), 1)
    assert.strictEqual(MatrixDeterminant(m1), 14, "Should return 4*8 - 3*6, i.e. 14")
    assert.strictEqual(MatrixDeterminant(m5), 10, "Should return the determinant of [[2,4,2],[3,1,1],[1,2,0]], i.e. 10")
  });
});