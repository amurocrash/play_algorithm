var MyHashSet = function() {
  this.BASE = 769
  this.data = new Array(this.BASE).fill(0).map(() => new Array())
}

MyHashSet.prototype.add = function(key) {
  const hashCode = this.hash(key)
  const arr = this.data[hashCode]
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return
    }
  }

  arr.push(key)
}

MyHashSet.prototype.remove = function(key) {
  const hashCode = this.hash(key)
  const arr = this.data[hashCode]
  for(let i = 0; i < arr.length; i++) {
    const e = arr[i]
    if (e === key) {
      arr.splice(i, 1)
      return
    }
  }
}

MyHashSet.prototype.contains = function(key) {
  const hashCode = this.hash(key)
  const arr = this.data[hashCode]
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return true
    }
  }

  return false
}

MyHashSet.prototype.hash = function(key) {
  return key % this.BASE
}

const hashSet = new MyHashSet()
console.log(hashSet.data)