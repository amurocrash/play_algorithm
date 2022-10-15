const fs = require('fs')
const { Heap } = require('../sort/heap-pro')

class Edge {
  constructor(v, w, weight) {
    this.v = v
    this.w = w
    this.weight = weight
  }

  other(x) {
    if (x === this.v || x === this.w) {
      return x === this.v ? this.w : this.v
    }
  }

  toString() {
    return '(' + this.v + '-' + this.w + ': ' + this.weight + ')'
  }

  equal(otherEdge) {
    return this.weight === otherEdge.weight
  }

  less(otherEdge) {
    return this.weight < otherEdge.weight
  }

  lessOrEqual() {
    return this.weight <= this.other.weight
  }

  larger(otherEdge) {
    return this.weight > otherEdge.weight
  }

  largerOrEqual(otherEdge) {
    return this.weight >= otherEdge.weight
  }
}

class Graph {
  static fromFile(filename, type = 'sparse') {
    const rawStr = fs.readFileSync(filename).toString()

    const rawData = rawStr.split('\n')
    let g
    rawData.forEach((item, index) => {
      if (index === 0) {
        const n = parseInt(item.split(' ')[0])
        if (type === 'sparse') {
          g = new SparseGraph(n)
        } else {
          g = new DenseGraph(n)
        }
      } else {
        const [v, w, weight = 1] = item.split(' ')
        g.addEdge(parseInt(v), parseInt(w), parseFloat(weight))
      }
    })

    return g
  }

  constructor(n, isDirected = false) {
    this.n = n
    this.m = 0
    this.isDirected = isDirected
    this.g = []
    this.init()
  }

  init() {}

  __assertV(v) {
    if (v < 0 || v >= this.n) {
      throw new Error('不合法的顶点：' + v)
    }
  }

  hasEdge(v, w) {}

  addEdge(v, w, weight = 1) {}

  forEach(v, callback) {}

  getTitle() {
    return 'Graph'
  }

  print() {
    const topline = `=========== ${this.getTitle()} with ${this.m} edges ===========`
    console.log(topline)
    let str = '\n'
    for(let i = 0; i < this.n; i++) {
      str += i + ': '
      this.forEach(i, edge => {
        str += edge.toString() + ', '
      })

      str += '\n'
    }

    console.log(str)

    let bottomline = ''
    for(let i = 0; i < topline.length; i++) {
      bottomline += '='
    }
    console.log(bottomline + '\n')
  }

  prim() {
    const mst = [] // 记录最小生成树每个节点的权值
    const marked = [] // 记录当前节点是否在标记边
    let mstWeight = 0 // 记录最小生成树的权值和
    // const queue = [] // 记录遍历过程中的edge，用heap换掉数组可提升性能
    const queue = new Heap((e1, e2) => e1.weight < e2.weight)

    // const __extractMinEdge = (arr) => {
    //   let minEdge
    //   let minIndex = -1
    //   arr.forEach((edge, index) => {
    //     if (!minEdge || edge.weight < minEdge.weight) {
    //       minEdge = edge
    //       minIndex = index
    //     }
    //   })

    //   arr.splice(minIndex, 1)

    //   return minEdge
    // }

    const __visit = (v) => {
      if (!marked[v]) {
        marked[v] = true

        this.forEach(v, edge => {
          // v对应的另一边的顶点没有被mark过，如果被mark过说明是已经遍历过的边，不再加入queue
          if (!marked[edge.other(v)]) {
            // queue.push(edge)
            queue.add(edge)
          }
        })
      }
    }

    __visit(0)
    while(queue.size() > 0) {
      // const e = __extractMinEdge(queue)
      const e = queue.extract()
      if (marked[e.v] === marked[e.w]) {
        continue // v和w属于同一边，说明不属于最小生成树，不用再考虑，直接跳过
      }

      mst.push(e)
      if (!marked[e.v]) {
        __visit(e.v)
      } else {
        __visit(e.w)
      }
    }

    mst.forEach(edge => {
      mstWeight += edge.weight
    })
    
    return {
      mst: mst.map(edge => edge.toString()),
      mstWeight
    }
  }
}

class DenseGraph extends Graph {
  constructor(n, isDirected = false) {
    super(n, isDirected)
  }

  init() {
    for(let i = 0; i < this.n; i++) {
      this.g[i] = []
      for(let j = 0; j < this.n; j++) {
        this.g[i][j] = null
      }
    }
  }

  hasEdge(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    return this.g[v][w]
  }

  addEdge(v, w, weight = 0) {
    const edge = this.hasEdge(v, w)
    if (edge) {
      const lastWeight = edge.weight
      if (lastWeight === weight) {
        return
      }
      // 接下来只是更新，m并没有变化
      this.m--
    }

    this.g[v][w] = new Edge(v, w, weight)
    if (!this.isDirected) {
      this.g[w][v] = new Edge(w, v, weight)
    }
    this.m++
  }

  forEach(v, callback) {
    this.g[v].forEach(edge => {
      if (edge !== null) {
        callback(edge)
      }
    })
  }

  getTitle() {
    return 'DenseGraph'
  }
}

class SparseGraph extends Graph {
  constructor(n, isDirected = false) {
    super(n, isDirected)
  }

  init() {
    for(let i = 0; i < this.n; i++) {
      this.g[i] = []
    }
  }

  hasEdge(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    return this.g[v].find(item => item.v === v && item.w === w)
  }

  addEdge(v, w, weight = 0) {
    const edge = this.hasEdge(v, w)
    if (edge) {
      const lastWeight = edge.weight
      if (lastWeight === weight) {
        return
      } else {
        edge.weight = weight
        if (!this.isDirected) {
          this.g[w].find(item => item.v === w && item.w === v).weight = weight
        }
      }
    } else {
      this.g[v].push(new Edge(v, w, weight))
      if (!this.isDirected) {
        this.g[w].push(new Edge(w, v, weight))
      }

      this.m++
    }
  }

  forEach(v, callback) {
    this.g[v].forEach(edge => {
      callback(edge)
    })
  }

  getTitle() {
    return 'SparseGraph'
  }

}

module.exports = {
  Graph,
  DenseGraph,
  SparseGraph,
}