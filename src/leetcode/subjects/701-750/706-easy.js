var MyHashMap = function() {
  this.BASE = 769
  this.data = new Array(this.BASE).fill(0).map(() => new Array())
}

MyHashMap.prototype.put = function(key, value) {
  const hashCode = this.hash(key)
  const arr = this.data[hashCode]
  for(let i = 0; i < arr.length; i++) {
    const [_key, _value] = arr[i]
    if (key === _key) {
      arr[i][1] = value
      return
    }
  }

  arr.push([key, value])
}

MyHashMap.prototype.get = function(key) {
  const hashCode = this.hash(key)
  const arr = this.data[hashCode]
  for(let i = 0; i < arr.length; i++) {
    const [_key, _value] = arr[i]
    if (key === _key) {
      return _value
    }
  }

  return -1
}

MyHashMap.prototype.remove = function(key) {
  const hashCode = this.hash(key)
  const arr = this.data[hashCode]
  for(let i = 0; i < arr.length; i++) {
    const [_key, _value] = arr[i]
    if (key === _key) {
      arr.splice(i, 1)
      return
    }
  }
}

MyHashMap.prototype.hash = function(key) {
  return key % this.BASE
}