const { UnionFind } = require('./union-find')
const { UnionFindSz } = require('./union-find-sz')
const { UnionFindRank } = require('./union-find-rank')

function test() {
  const n = 10
  const union = new UnionFind(n)
  const unionsz = new UnionFindSz(n)
  const unionrank = new UnionFindRank(n)

  for (let i = 0; i < n; i++) {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)
    union.union(a, b)
    unionsz.union(a, b)
    unionrank.union(a, b)
  }
  union.print()
  unionsz.print()
  unionrank.print()

  for(let i = 0; i < n; i++) {
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)
    const res1 = union.isConnect(a, b)
    const res2 = unionsz.isConnect(a, b)
    const res3 = unionrank.isConnect(a, b)
    if (res1) {
      console.log('res1 -> ' + a + ' & ' + b + ', isConnected')
    }
    if (res2) {
      console.log('res2 -> ' + a + ' & ' + b + ', isConnected')
    }
    if (res3) {
      console.log('res3 -> ' + a + ' & ' + b + ', isConnected')
    }
  }
}

test()