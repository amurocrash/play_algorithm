class UnionFind {
  constructor(n) {
    this.ids = []
    if (n > 0) {
      for(let i = 0; i < n; i++) {
        this.ids.push(i)
      }
    }
  }

  __assert(p) {
    if (p < 0 || p >= this.size()) {
      throw new Error('index out of bounds')
    }
  }

  size() {
    return this.ids.length
  }

  find(p) {
    this.__assert(p)
    return this.ids[p]
  }

  isConnect(p, q) {
    this.__assert(p)
    this.__assert(q)
    return this.ids[p] === this.ids[q]
  }

  union(p, q) {
    this.__assert(p)
    this.__assert(q)

    const pid = this.find(p)
    const qid = this.find(q)
    if (pid === qid) {
      return
    }

    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === pid) {
        this.ids[i] = qid
      }
    }
  }

  print() {
    console.log(this.ids)
  }
}

module.exports = {
  UnionFind
}