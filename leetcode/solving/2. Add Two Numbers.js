// https://leetcode.com/problems/add-two-numbers/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const reverse = function (list) {

}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  // 배열 뒤집기
  l1 = l1.reverse();
  l2 = l2.reverse();
  return (l1 + l2)
    .reverse()
    .split("");
};

module.exports = { addTwoNumbers };