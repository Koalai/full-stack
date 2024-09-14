class Node {
  constructor() {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = this.buildTree(array)
  }

  buildTree(array) {
    let array = [...new Set(array)].sort((a, b) => a - b)

    let midpointOfArr = Math.floor(array.length / 2)
    let newNode = new Node(arr[midpointOfArr])
    let leftSideArr = array.slice(0, midpointOfArr)
    let rightSideArr = array.slice(midpointOfArr + 1)

    newNode.left = this.buildTree(leftSideArr)
    newNode.right = this.buildTree(rightSideArr)

    return newNode
  }

  insert(value) {}
}
