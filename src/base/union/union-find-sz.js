class UnionFindSz {
  constructor(n) {
    this.data = []
    this.sz = [] // 记录当前索引为根节点的元素有多少子元素

    // 数组每个元素指向自己的上一个节点，根节点则自己指向自己
    for (let i = 0; i < n; i++) {
      this.data.push(i)
      this.sz.push(1)
    }
  }

  size() {
    return this.data.length
  }

  __assert(p) {
    if (p < 0 || p >= this.size()) {
      throw new Error('index out of bounds')
    }
  }

  find(p) {
    this.__assert(p)

    while(p !== this.data[p]) {
      p = this.data[p]
    }

    return p
  }

  isConnect(p, q) {
    this.__assert(p)
    this.__assert(q)
    return this.find(p) === this.find(q)
  }

  union(p, q) {
    this.__assert(p)
    this.__assert(q)

    const pRoot = this.find(p)
    const qRoot = this.find(q)

    if (pRoot === qRoot) {
      return
    }

    // 小的挂到大的上面
    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.data[pRoot] = qRoot // p挂到q上
      this.sz[qRoot] += this.sz[pRoot]
    } else {
      this.data[qRoot] = pRoot
      this.sz[pRoot] += this.sz[qRoot]
    }
  }

  print() {
    console.log(this.data)
  }
}

module.exports = {
  UnionFindSz
}