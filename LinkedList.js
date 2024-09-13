import { Node } from "./Node";

class LinkedList {

    constructor(head = null) {
        this.head = head
    }

    prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        }

        node.nextNode = this.head;
        this.head = node
    }

    append(value) {
        const node = new Node(value);
        
        if (!this.head) {
            this.head = node
        } else {
            let currentNode = this.head
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            } 

            currentNode.nextNode = node
        }
    }

    
}

