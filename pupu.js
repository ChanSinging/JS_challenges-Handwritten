function ListNode(val){
    this.val = val;
    this.next = null;
}
/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
    // TODO
	if(!head) return head;
	let l = head, r = head.next;
	while(l.next!=null){
		if(l.val==l.next.val){
			l.next = l.next.next;
		}else{
			l = l.next;
		}
	}
	return head;
}

//test case
// 输入：head = [1,2,3,3,4,4,5]       输出：[1,2,5]
// 输入：head = [1,1,1,2,3]        输出：[2,3]
var obj = new ListNode(1);
obj.next = new ListNode(2);
obj.next.next = new ListNode(3);
obj.next.next.next = new ListNode(3);
obj.next.next.next.next = new ListNode(4);
obj.next.next.next.next.next = new ListNode(4);
obj.next.next.next.next.next.next = new ListNode(5);
console.log(obj);
console.log(JSON.stringify(deleteDuplicates(obj)));

// 删除升序链表中的重复元素