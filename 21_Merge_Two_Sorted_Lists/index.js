function LinkedNode(val) {
    this.val = val;
    this.next = null;
}
function CreateLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new LinkedNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new LinkedNode(arr[i]);
        current = current.next;
    }
    return head;
}

var mergeTwoLists = function (list1, list2) {
    let dummy = new LinkedNode(-1);
    let list = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            list.next = list1;
            list1 = list1.next;
        }
        else {
            list.next = list2;
            list2 = list2.next;
        }
        list = list.next;
    }
    list.next = list1 || list2;
    return dummy.next;
};


let list1 = [1, 2, 4], list2 = [1, 3, 4];
let l1 = CreateLinkedList(list1);
let l2 = CreateLinkedList(list2);
console.log(mergeTwoLists(l1, l2));