// https://leetcode.com/problems/longest-common-prefix/description/
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let prefix = '';
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const currChar = firstStr[i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== currChar) {
        return prefix;
      }
    }

    prefix += currChar;

  }

  return prefix;
};

module.exports = { longestCommonPrefix };