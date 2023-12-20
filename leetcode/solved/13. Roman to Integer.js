// https://leetcode.com/problems/roman-to-integer/description/
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {

  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const currentN = romanNumbers[s[i]];
    const nextN = romanNumbers[s[i + 1]];

    if (currentN < nextN) {
      sum += (nextN - currentN);
      i++;
      continue;
    }

    sum += currentN;
  }
  
  return sum;
};

module.exports = { romanToInt };