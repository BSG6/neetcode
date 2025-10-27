/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * Remove the n-th node from the end using two pointers and a dummy head.
     *
 
     *
     * @param {ListNode|null} head
     * @param {number} n
     * @return {ListNode|null}
     */
    removeNthFromEnd(head, n) {
        const boat = new ListNode(0, head);
        let fast = head;
        let slow = boat;

        // 1) Advance `fast` n steps ahead
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // 2) Move both until `fast` reaches the end
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // 3) `slow.next` is the node to remove
        slow.next = slow.next.next;

        // 4) Return possibly-new head
        return boat.next;
    }
}
