function assertV(n) {
  return (v) => {
    if (v < 0 || v >= n) {
      throw new Error('无法处理的顶点值')
    }
  }
}

function throwError(message) {
  throw new Error(message)
}

class Graph {
  constructor(n, isDirected = false) {
    if (n < 0) {
      throw new Error('图的顶点数不能小于0')
    }

    this.n = n // 顶点数
    this.__assertV = assertV(this.n)
    this.m = 0 // 边数
    this.isDirected = isDirected // 是否有向图
    this.g = [] // 记录顶点之间边的关系
    this.ccount = -1 // 记录连通分量数
    this.id = [] // 记录顶点是否在同一个连通分量，是的话则为同一个数
    this.init()
  }

  init() {
    throwError('请用子类实现该方法')
  }

  V() {
    return n
  }

  E() {
    return m
  }

  hasEdge(v, w) {
    throwError('请用子类实现该方法')
  }

  addEdge(v, w) {
    throwError('请用子类实现该方法')
  }

  iterator() {
    return (v) => ({
      begin() {
        throwError('请用子类实现该方法')
      },

      next() {
        throwError('请用子类实现该方法')
      },

      next() {
        throwError('请用子类实现该方法')
      }
    })
  }

  print() {
    let str = ''
    for (let i = 0; i < this.n; i++) {
      str += i + ': '
      const itor = this.iterator()(i)
      for (let j = itor.begin(); !itor.end(); j = itor.next()) {
        str += j + ', '
      }

      str += '\n'
    }

    console.log(str)
  }

  dfs(visited = []) {
    const __dfs = (v, options) => {
      const { extra, from } = options
      visited[v] = true
      // this.id[v] = this.ccount
      if (extra) {
        extra(v)
      }
      const itor = this.iterator()(v)
      for (let i = itor.begin(); !itor.end(); i = itor.next()) {
        if (!visited[i]) {
          if (Array.isArray(from)) {
            from[i] = v // i这个顶点的上一个顶点是v from的index代表上一个顶点
          }
          __dfs(i, options)
        }
      }
    }
    return __dfs
  }

  getComponents() {
    if (this.ccount < 0) {
      this.ccount = 0
      const visited = []
      const _dfs = this.dfs(visited)
      for (let i = 0; i < this.n; i++) {
        if (!visited[i]) {
          _dfs(i, { extra: (v) => this.id[v] === this.ccount })
          this.ccount++
        }
      }
    }

    return this.ccount
  }

  isConnected(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    return this.id[v] === this.id[w]
  }

  genPath(s) {
    this.__assertV(s)
    const visited = []
    const from = []

    this.dfs(visited)(s, { from })

    return {
      hasPath: (w) => {
        this.__assertV(w)
        return visited[w]
      },

      path: (w) => {
        this.__assertV(w)

        if (w === s) {
          return null
        }

        const res = []
        let p = w
        while(p !== undefined) {
          res.push(p)
          p = from[p]
        }

        return res.reverse()
      }
    }
  }
}


/**
 * 稠密图 - 邻接矩阵 - 保存所有顶点之间的关系
 *    0  1  2  3
 * 0  f  t  f  f
 * 1  t  f  t  f
 * 2  t  f  f  f
 * 3  f  t  t  f
 */
class DenseGraph extends Graph {
  constructor(n, isDirected = false) {
    super(n, isDirected)    
  }

  init() {
    for (let i = 0; i < this.n; i++) {
      const edges = []
      for (let i = 0; i < this.n; i++) {
        edges.push(false)
      }
      this.g.push(edges)
    }
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

  hasEdge(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    return this.g[v][w]
  }

  iterator() {
    let index = 0
    const __next = (v) => () => {
      for (index += 1; index < this.n; index++) {
        if (this.g[v][index]) {
          return index
        }
      }

      return -1
    }

    return (v) => ({
      begin: () => {
        index = -1
        return __next(v)()
      },

      next: __next(v),

      end: () => {
        return index >= this.n
      }
    })
  }
}

/**
 * 稀疏图 - 邻接表 - 只保存有连接的顶点
 * 0 - 1
 * 1 - 0 2
 * 2 - 0
 * 3 - 1 2
 */
class SparseGraph extends Graph {
  constructor(n, isDirected = false) {
    super(n, isDirected)    
  }

  init() {
    for (let i = 0; i < this.n; i++) {
      this.g.push([])
    }
  }

  addEdge(v, w) {
    if (this.hasEdge(v, w)) {
      return
    }

    this.g[v].push(w)
    if (v !== w && !this.isDirected) {
      this.g[w].push(v)
    }

    this.m++
  }

  hasEdge(v, w) {
    this.__assertV(v)
    this.__assertV(w)

    for (let i = 0; i < this.g[v].length; i++) {
      if (this.g[v][i] === w) {
        return true
      }
    }

    return false
  }

  iterator() {
    let index = 0
    return (v) => ({
      begin: () => {
        index = 0
        if (this.g[v].length > 0) {
          return this.g[v][index]
        }

        return -1
      },

      next: () => {
        index++
        if (index < this.g[v].length) {
          return this.g[v][index]
        }
        return -1
      },

      end: () => {
        return index >= this.g[v].length
      }
    })
  }
}

module.exports = {
  DenseGraph,
  SparseGraph
}


const path = require('path')
const fs = require('fs')

function generateGraph(type = 'sparse', n = 10, m = 100,) {
  let g
  if (type === 'sparse') {
    g = new SparseGraph(n)
  } else {
    g = new DenseGraph(n)
  }

  for(let i = 0; i < m; i++) {
    const a = Math.floor(Math.random() * n)
    const b = Math.floor(Math.random() * n)

    g.addEdge(a, b)
  }

  return g
}

function generateGraphDouble(n = 10, m = 100,) {
  const sg = new SparseGraph(n)
  const dg = new DenseGraph(n)

  for(let i = 0; i < m; i++) {
    const a = Math.floor(Math.random() * n)
    const b = Math.floor(Math.random() * n)

    sg.addEdge(a, b)
    dg.addEdge(a, b)
  }

  return {
    sg,
    dg
  }
}

function generateGraphFromFile(path, type = 'sparse') {
  const rawStr = fs.readFileSync(path).toString()
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

function testGenGraphFromFile() {
  const p = path.join(__dirname, 'g1.gh')
  const sg = generateGraphFromFile(p)
  sg.print()
  const dg = generateGraphFromFile(p, 'dense')
  dg.print()
}

function testComponents() {
  const filenames = ['g1.gh', 'g2.gh']

  filenames.forEach(filename => {
    const p = path.join(__dirname, filename)
    const sg = generateGraphFromFile(p)
    sg.print()
    const ccount = sg.getComponents()
    console.log(ccount)
  })
}

function testPath() {
  const files = ['g2.gh']
  files.forEach(filename => {
    const p = path.join(__dirname, filename)
    const sg = generateGraphFromFile(p)
    sg.print()
    const sp = sg.genPath(0).path(6)
    console.log(sp)
  })
}