const fs = require('fs')

function getComponents(graph) {
  const visited = []
  const ids = []
  let ccount = 0

  const __dfs = (v) => {
    visited[v] = true
    ids[v] = ccount
    graph.forEach(v, w => {
      if (!visited[w]) {
        __dfs(w)
      }
    })
  }

  for(let i = 0; i < graph.V(); i++) {
    if (!visited[i]) {
      __dfs(i)
      ccount++
    }
  }

  return {
    ccount,
    ids
  }
}

function genPath(graph, v) {
  const visited = []
  const from = []

  const __dfs = (v) => {
    visited[v] = true
    graph.forEach(v, w => {
      if (!visited[w]) {
        from[w] = v // w的上一个节点是v
        __dfs(w)
      }
    })
  }

  __dfs(v)

  return {
    visited,
    from
  }
}

/**
 * 求无权图的最短路径
 * @param {*} graph 
 * @returns 
 */
function shortestPath(graph, s = 0) {
  if (graph.isDirected) {
    throw new Error('shortestPath方法只能求无权图的最短路径')
  }

  const visited = []
  const queue = [] // 遍历使用的队列，原理同二叉树广度遍历，需要多处理一个visited
  const from = []
  
  const distances = [] // 其他顶点到s的距离记录

  const traversRes = [] // 广度遍历的结果

  queue.push(s)
  visited[s] = true
  distances[s] = 0

  while(queue.length > 0) {
    const v = queue.shift()
    traversRes.push(v)

    graph.forEach(v, w => {
      if (!visited[w]) {
        visited[w] = true
        from[w] = v
        queue.push(w)
        distances[w] = distances[v] + 1
      }
    })
  }

  return {
    traversRes,
    visited,
    distances,
    from,
  }
}

class Graph {
  static fromFile(filepath, type = 'sparse') {
    const rawStr = fs.readFileSync(filepath).toString()

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
        const [v, w] = item.split(' ')
        g.addEdge(parseInt(v), parseInt(w))
      }
    })

    return g
  }

  constructor(n, isDirected = false) {
    this.n = n // 顶点数
    this.m = 0 // 边数
    this.isDirected = isDirected // 是否有向图
    this.ccount = 0 // 连通分量数
    this.ids = [] // 记录是否连通，连通的量取值相同
    this.g = [] // 记录图的关系
    this.init()
  }

  init() {}

  __assertV(v) {
    if (v < 0 || v >= this.n) {
      throw new Error('不合法的v: ' + v + '，最大支持' + (this.n - 1))
    }
  }

  V() {
    return this.n
  }

  E() {
    return this.m
  }

  WS(v) {
    this.__assertV(v)
    return this.g[v]
  }

  hasEdge(v, w) {}

  addEdge(v, w) {}

  forEach(v, callback) {
    if (!callback && typeof v === 'function') {
      this.g.forEach(ws => v(ws))
      return
    }

    this.__assertV(v)

    this.g[v].forEach(w => {
      callback(w)
    })
  }

  print() {
    let str = ''
    this.g.forEach((_, v) => {
      str += v + ': '
      this.forEach(v, w => {
        str += w + ', '
      })

      if (v !== this.n - 1) {
        str += '\n'
      }
    })

    console.log(`========= ${this.getTitle()} ========`)
    console.log(str)
    console.log('==============================')
  }

  getTitle() {}

  getComponents() {
    if (this.ccount > 0 && this.ids.length > 0) {
      return this.ccount
    }

    const { ccount, ids } = getComponents(this)
    this.ccount = ccount
    this.ids = ids

    return ccount
  }

  isConnected(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    return this.ids[v] === this.ids[w]
  }

  /**
   * 获取s, w之间的路径
   * @param {*} s 起点
   * @param {*} w 终点
   * @returns undefined表示没有路径，正常返回路径组成的数组
   */
  genPath(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    // 先生成以v为起点的所有路径，from的index代表当前v，值代表上一个节点的v
    const { visited, from } = genPath(this, v)
    if (!visited[w]) {
      return // v, w之间没有路径
    }

    // 再去看w在哪一条路径上，注意这时候是倒推，所以结果要反转一下
    const res = []
    let p = w
    while (p !== undefined) {
      res.push(p)
      p = from[p]
    }

    return res.reverse()
  }

  genShortestPath(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    const { from } = shortestPath(this, v)

    const res = []
    let p = w
    while(p !== undefined) {
      res.push(p)
      p = from[p]
    }

    return res.reverse()
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
    this.__assertV(v, w)

    const ws = this.g[v]
    return ws.includes(w)
  }

  addEdge(v, w) {
    if (this.hasEdge(v, w)) {
      return
    }

    this.g[v].push(w)
    if (!this.isDirected) {
      this.g[w].push(v)
    }

    this.m++
  }

  getTitle() {
    return 'SparseGraph'
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
        this.g[i][j] = false
      }
    }
  }

  hasEdge(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    return this.g[v][w]
  }

  addEdge(v, w) {
    if (this.hasEdge(v, w)) {
      return
    }

    this.g[v][w] = true
    if (!this.isDirected) {
      this.g[w][v] = true
    }
    this.m++
  }

  forEach(v, callback) {
    this.__assertV(v)

    this.g[v].forEach((e, index) => {
      if (e) {
        callback(index)
      }
    })
  }

  getTitle() {
    return 'DenseGraph'
  }
}

module.exports = {
  Graph,
  SparseGraph,
  DenseGraph
}