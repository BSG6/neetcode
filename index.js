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
     
     *
     * @param {ListNode|null} head
     * @return {boolean}
     */
    hasCycle(head) {
        const seen = new Set();  // stores node references we've visited

        let cur = head;
        while (cur !== null) {
            if (seen.has(cur)) {
                //  reached a node i've seen before → cycle exists
                return true;
            }
            seen.add(cur);
            cur = cur.next;
        }

        // Reached the end (null) without repeats → no cycle
        return false;
    }
}
