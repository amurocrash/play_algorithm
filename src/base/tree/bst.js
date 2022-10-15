class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

function __removeMin(node) {
  if (!node) {
    return null
  }

  let removed
  const __remove = (node) => {
    if (node.left) {
      node.left = __remove(node.left)
      return node
    } else {
      removed = node
      return node.right
    }
  }

  __remove(node)
  return removed
}

function __removeMax(node) {
  if (!node) {
    return null
  }

  let removed
  const __remove = (node) => {
    if (node.right) {
      node.right = __remove(node.right)
      return node
    } else {
      removed = node
      return node.left
    }
  }

  __remove(node)
  return removed
}

class BST {
  constructor() {
    this.root = null
    this.count = 0
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  insert(key, value) {
    const __insert = (node, key, value) => {
      if (!node) {
        this.count++
        return new Node(key, value)
      }

      if (key < node.key) {
        node.left = __insert(node.left, key, value)
      } else if (key === node.key) {
        node.value = value
      } else {
        node.right = __insert(node.right, key, value)
      }

      return node
    }

    this.root = __insert(this.root, key, value)
  }

  contain(key) {
    const __contain = (node, key) => {
      if (!node) {
        return false
      }

      if (key === node.key) {
        return true
      } else if (key < node.key) {
        return __contain(node.left, key)
      } else {
        return __contain(node.right, key)
      }
    }

    return __contain(this.root, key)
  }

  search(key) {
    const __search = (node, key) => {
      if (!node) {
        return null
      }

      if (key === node.key) {
        return node.value
      } else if (key < node.key) {
        return __search(node.left, key)
      } else {
        return __search(node.right, key)
      }
    }

    return __search(this.root, key)
  }

  traverse(type, callback = (key, value) => console.log(key, value)) {
    const __preOrder = (node) => {
      if (!node) {
        return
      }

      callback(node.key, node.value)
      __preOrder(node.left)
      __preOrder(node.right)
    }

    const __inOrder = (node) => {
      if (!node) {
        return
      }

      __inOrder(node.left)
      callback(node.key, node.value)
      __inOrder(node.right)
    }

    const __postOrder = (node) => {
      if (!node) {
        return
      }

      __postOrder(node.left)
      __postOrder(node.right)
      callback(node.key, node.value)
    }

    const __levelOrder = (root) => {
      if (root === null) {
        return
      }

      const queue = []

      queue.push(root)
      while(queue.length > 0) {
        const node = queue.shift()
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
        callback(node.key, node.value)
      }
    }

    if (type === 'pre') {
      __preOrder(this.root)
    } else if (type === 'in') {
      __inOrder(this.root)
    } else if (type === 'post') {
      __postOrder(this.root)
    } else {
      __levelOrder(this.root)
    }
  }

  findMin() {
    const __find = (node) => {
      if (!node) {
        return null
      }

      if (!node.left) {
        return node
      } else {
        return __find(node.left)
      }
    }

    return __find(this.root)?.key
  }

  findMax() {
    const __find = (node) => {
      if (!node) {
        return null
      }

      if (!node.right) {
        return node
      } else {
        return __find(node.right)
      }
    }

    return __find(this.root)?.key
  }

  removeMin() {
    const removed = __removeMin(this.root)
    if (removed !== null) {
      this.count--
    }

    return removed
  }

  removeMax() {
    const removed = __removeMax(this.root)
    if (removed !== null) {
      this.count--
    }

    return removed
  }

  // 被删除节点左右子树都存在时，选择右子树中的最小值来替换当前节点
  remove(key) {
    if (this.root === null) {
      return null
    }

    let removed
    const __remove = (node, key) => {
      if (key < node.key) {
        node.left = __remove(node.left, key)
        return node
      } else if (key > node.key) {
        node.right = __remove(node.right, key)
        return node
      } else {
        removed = node
        this.count--
        if (node.left && !node.right) {
          return node.left
        } else if (!node.left && node.right) {
          return node.right
        } else if (!node.left && !node.right) {
          return null
        } else {
          const minNode = __removeMin(node)
          minNode.left = node.left
          minNode.right = node.right
          return minNode
        }

      }
    }

    this.root = __remove(this.root, key)
    return removed
  }
}

module.exports = {
  BST
}