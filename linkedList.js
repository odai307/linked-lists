class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) this.head = this.tail= newNode;
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) this.head = this.tail = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
    }

    size() {
        return this.length;
    }

    getHead() {
        if (this.head) return this.head.value;
        return this.head ? this.head : null;
    }

    getTail() {
        if (this.tail) return this.tail.value;
        return this.tail ? this.tail : null;
    }

    at(index) {
        if (index >= this.length || index < 0) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }

    pop() {
        if (this.head === null) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.length --;
    }


    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index ++;
        }
        return null;
    }

    insertAt(value, index) {
        if (index > this.length || index < 0) return;
        const newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (this.length === 0) {
                this.tail = newNode;
            }
        } else {
            let previous = this.head;
            let current = this.head;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = newNode;
            newNode.next = current;

            if (current === null) {
                this.tail = newNode;
            }
        }
        this.length ++;
    }

    removeAt(index) {
        if (index >= this.length || index < 0) return;
        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
            }
            if (this.length === 1) this.tail = this.head;
        } else {
            let previous = this.head;
            let current = this.head;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            if (current.next === null) this.tail = previous
        }
        this.length --;
    }

    toString() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `(${current.value}) -> `;
            current = current.next;
        }
        result += "null";
        return result;
    }

}


module.exports = LinkedList;

