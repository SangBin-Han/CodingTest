/**
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/?envType=daily-question&envId=2023-12-18
 * 1913. Maximum Product Difference Between Two Pairs (Easy)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = function (nums) {
  const sorted = nums.sort((a, b) => b - a);
  return (sorted[0] * sorted[1]) - (sorted[sorted.length - 1] * sorted[sorted.length - 2]);
};

module.exports = { maxProductDifference };