class UnionFindRank {
  constructor(n) {
    this.data = []
    this.rank = []

    for(let i = 0; i < n; i++) {
      this.data.push(i)
      this.rank.push(1)
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
      this.data[p] = this.data[this.data[p]] // 路径压缩
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

    const pRank = this.rank[pRoot]
    const qRank = this.rank[qRoot]

    if (pRank < qRank) {
      this.data[pRoot] = qRoot
    } else if (pRank > qRank) {
      this.data[qRoot] = pRoot
    } else {
      this.data[pRoot] = qRoot
      this.rank[qRoot] += 1
    }

  }

  print() {
    console.log(this.data)
  }
}

module.exports = {
  UnionFindRank
}