// https://leetcode.com/problems/valid-parentheses/description/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {

  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    const lastStackBracket = stack[stack.length - 1];

    if (brackets[lastStackBracket] === currentBracket) {
      stack.pop();
      continue;
    }

    stack.push(currentBracket);
  }

  return stack.length === 0;
};

module.exports = { isValid };