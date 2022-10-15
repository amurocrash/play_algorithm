const { Graph, SparseGraph, DenseGraph } = require('./graph-pro')
const path = require('path')

function testGenGraphFromFile() {
  const filepath = path.join(__dirname, 'g2.gh')
  const sg = Graph.fromFile(filepath)
  sg.print()

  const dg = Graph.fromFile(filepath, 'dense')
  dg.print()
}

function testComponents() {
  const files = [path.join(__dirname, 'g1.gh'), path.join(__dirname, 'g2.gh')]
  files.forEach(filepath => {
    const sg = Graph.fromFile(filepath)
    sg.print()
    const ccounts = sg.getComponents(sg)
    console.log(ccounts)
    console.log(sg.ids)
  })
}

function testPath() {
  const files = [path.join(__dirname, 'g1.gh')]
  files.forEach(filepath => {
    const sg = Graph.fromFile(filepath)
    sg.print()
    const res = sg.genPath(1, 7)
    console.log(res)
  })
}

function testShortestPath() {
  const files = [path.join(__dirname, 'g2.gh')]
  files.forEach(filepath => {
    const sg = Graph.fromFile(filepath, 'dense')
    sg.print()
    const res = sg.genPath(0, 6)
    console.log(res)
    const ress = sg.genShortestPath(0, 6)
    console.log(ress)
  })
}

function testGenGraphFromFilePro() {
  const filename = path.join(__dirname, 'g3.gh')
  const dg = Graph.fromFile(filename, 'dense')
  dg.print()
  dg.addEdge(0, 2, 1)
  dg.print()

  const sg = Graph.fromFile(filename)
  sg.print()
  sg.addEdge(0, 2, 1)
  sg.print()
}

function testPrim() {
  const filename = path.join(__dirname, 'g3.gh')
  const sg = Graph.fromFile(filename)
  sg.print()
  const { mst, mstWeight } = sg.prim()
  console.log(mst)
  console.log(mstWeight)
}

function run() {
  // testGenGraphFromFile()
  // testComponents()
  // testPath()
  // testShortestPath()
  // testGenGraphFromFilePro()
  testPrim()
}

module.exports = {
  run
}
