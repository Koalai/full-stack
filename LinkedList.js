import { Node } from "./Node";

class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
    }

    prepend(value) {
        const node = new Node(value)
        this.length += 1
        if (!this.head) {
            this.head = node
        }

        node.nextNode = this.head;
        this.head = node
    }

    append(value) {
        const node = new Node(value);
        this.length +=1
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

    size(value) {
        if (!this.head) {
            return null    
        } else {
            return  this.length
        }
    }

    
}

