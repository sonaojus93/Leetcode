function LinkedNode(val) {
    this.val = val;
    this.next = null;
}

function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow)
            return true;
    }
    return false;
}