//  Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    toString() {
        return this.val
    }
}

 class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    };

    pop() {

        if (this.length <= 1) {
            this.head = null;
            this.tail = null;

        } else {
            let newTail = this.head;

            while (newTail.next.next) {
                newTail = newTail.next;
            }

            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;

        return this;
    };

    shift() {

        if (this.length <= 1) {
            this.head = null;
            this.tail = null;
        } else {
            let head = this.head.next;
            this.head.next = null;
            this.head = head
        }
        this.length--;

        return this;

    }

    unShift(val) {

        const newNode = new Node(val);

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;

    }

    get(position) {

        if(position < 0 || position >= this.length) return undefined;

        let current = this.head;
        let count = 0;

        while(count < position) {
            current = current.next;
            count++;
        }

        return current;

    }

    set(val,position) {

        if(position < 0 || position >= this.length) return undefined;

        const foundVal = this.get(position);
        foundVal.val = val;
        return foundVal
    }

    insert(val,position) {

        if(position < 0 || position >= this.length) return undefined;
        if(position === 0) return !!this.unShift(val);
        if(position === this.length - 1) return !!this.push(val);

        const newNode = new Node(val);
        const foundVal = this.get(position - 1);

        const next = foundVal.next;
        newNode.next = next;
        foundVal.next = newNode;
        this.length++;

        return this;
    }

    removeElement(values) {

        let dummyNode = new Node(0);
        dummyNode.next = this.head;
        let temp = dummyNode;

        while(temp && temp.next) {

            if(values.includes(temp.next.val)) {
                temp.next = temp.next.next;
            }else {
                temp = temp.next;
            }
        }
        return dummyNode.next;
    };

}


const linkedList2 = new SinglyLinkedList();
const nums = [9,2,5], head = [1,2,3,4,5]


linkedList2.push(2);
linkedList2.push(9);
linkedList2.push(10);
// linkedList2.push(1);
// linkedList2.push(1);
// linkedList2.push(2);
// linkedList2.push(1);
// linkedList2.push(2);
// linkedList2.push(3);
// linkedList2.push(4);
// linkedList2.push(5);

console.log(linkedList2.removeElement(nums))
console.log({linkedList2:JSON.stringify(linkedList2)});