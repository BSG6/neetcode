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
     * @return {void} Do not return anything, modify head in-place instead.
     */
    reorderList(head) {
        if (head === null || head.next === null) return;

        // 1) Collect node references in an array
        const nodes = [];
        let cur = head;
        while (cur !== null) {
            nodes.push(cur);
            cur = cur.next;
        }

        // 2) Relink using two pointers
        let i = 0;
        let j = nodes.length - 1;

        while (i < j) {
            // link i -> j
            nodes[i].next = nodes[j];
            i++;

            // if pointers meet after increment, break to avoid self-loop
            if (i === j) break;

            // link j -> i
            nodes[j].next = nodes[i];
            j--;
        }

        // 3) Terminate the list
        nodes[i].next = null;
    }
}
