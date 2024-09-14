class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  prepend(value) {
    let node = new Node(value)
    this.length++
    if (this.head === null) {
      this.head = node
    }

    node.nextNode = this.head
    this.head = node
  }

  append(value) {
    let node = new Node(value)
    this.length++
    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode
      }

      currentNode.nextNode = node
    }
  }

  size(value) {
    if (this.head === null) {
      return null
    } else {
      return this.length
    }
  }

  getHead() {
    if (this.head === null) {
      return null
    }

    return this.head
  }

  getTail() {
    if (this.head === null) {
      return null
    }
    let currentNode = this.head
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  at(index) {
    if (this.head === null) {
      return null
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  pop() {
    if (this.head === null) {
      return null
    }

    if (this.head.nextNode === null) {
      this.head = null
      this.length--
      return
    }

    let currentNode = this.head
    let prevCurrentNode = null

    while (currentNode.nextNode !== null) {
      prevCurrentNode = currentNode
      currentNode = currentNode.nextNode
    }

    prevCurrentNode.nextNode = null
    this.length--
  }

  contains(value) {
    let currentNode = this.head

    if (this.head === null) {
      return null
    }

    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.nextNode
    }
    return false
  }

  find(value) {
    let currentNode = this.head
    let currentIndex = 0

    if (this.head === null) {
      return null
    }

    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex
      }
      currentNode = currentNode.nextNode
      currentIndex++
    }
    return null
  }

  toString(value) {
    let result = ""
    let currentNode = this.head

    if (this.head === null) {
      return null
    }

    while (currentNode !== null) {
      result += currentNode.value

      if (currentNode.nextNode !== null) {
        result += ` -> `
      }

      currentNode = currentNode.nextNode
    }
    return result
  }

  insertAt(value, index) {
    let currentNode = this.head
    const newNode = new Node(value)

    if (this.head === null) {
      return null
    }
    if (index === 0) {
      this.prepend(value)
      return
    }
    if (index > this.length) {
      this.append(value)
    }

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode
    }
    const nextNodeOfCurrentNode = currentNode.nextNode
    currentNode.nextNode = newNode
    newNode.nextNode = nextNodeOfCurrentNode
    this.length++
  }

  removeAt(index) {
    let currentNode = this.head
    if (this.head === null) {
      return null
    }
    if (index < 0 || index >= this.length) {
      console.log("Error")
    }

    if (index === 0) {
      this.head = this.head.nextNode
    }

    let prevNode = this.head
    let curNode = this.head.nextNode

    for (let i = 1; i < index; i++) {
      prevNode = curNode
      curNode = curNode.nextNode
    }

    prevNode.nextNode = curNode.nextNode
    this.length--
  }
}

const linkedList = new LinkedList()

linkedList.append("Khoa")
linkedList.append("Khoa2")
linkedList.prepend("ahehe")
linkedList.insertAt("Khoa1", 2)
linkedList.pop()
linkedList.removeAt(1)



// console.log(linkedList.size())
// console.log(linkedList.contains("haha"))
// console.log(linkedList.contains("Khoa"))
console.log(linkedList.toString())
// console.log(linkedList.at(1))
console.log(linkedList.find("Khoa1"))
