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
     * @param {ListNode|null} list1
     * @param {ListNode|null} list2
     * @return {ListNode|null}
     */
    mergeTwoLists(list1, list2) {
        // silly/sentinel node to simplify head handling
        const silly = new ListNode();
        let tail = silly;

        // While both lists still have nodes, pick the smaller head to append
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                tail.next = list1;     // attach list1's node
                list1 = list1.next;    // advance list1
            } else {
                tail.next = list2;     // attach list2's node
                list2 = list2.next;    // advance list2
            }
            tail = tail.next;          // advance the merged tail
        }

        // One of the lists may have leftover nodes; append them directly
        tail.next = (list1 !== null) ? list1 : list2;

        // The merged list starts after the dummy
        return silly.next;
    }
}
