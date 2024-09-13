import { Node } from "./Node";

class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
    }

    prepend(value) {
        let node = new Node(value)
        this.length += 1
        if (!this.head) {
            this.head = node
        }

        node.nextNode = this.head;
        this.head = node
    }

    append(value) {
        let node = new Node(value);
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

    getHead() {
        if (!this.head) {
            return null
        }
        
        return this.head
        
    }

    getTail() {
        if (!this.head) {
            return null    
        } 
        let currentNode = this.head
        while (!currentNode.nextNode) {
            currentNode = currentNode.nextNode
        }

        return currentNode
    }

    at(index) {
        if (!this.head) {
            return null    
        } 
        let currentNode = this.head
        for (let i = 0; i < index; i++){
            currentNode = currentNode.nextNode
        }

        return currentNode
    }

    pop() {
        if (!this.head) {
            return null    
        } 

        if (!this.head.nextNode) {
            return this.head = null
        }

        let currentNode = this.head
        let prevCurrentNode = null

        while (currentNode.nextNode) {
            prevCurrentNode = currentNode
            currentNode = currentNode.nextNode; 
        }

        prevCurrentNode.nextNode = null
    }
}

