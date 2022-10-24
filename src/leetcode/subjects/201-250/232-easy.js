var MyQueue = function() {
  this.stack1 = [] // only push pop
  this.stack2 = []
}

MyQueue.prototype.push = function(x) {
  if (this.stack2.length > 0) {
    while(this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop())
    }
  } 

  this.stack1.push(x)
}

MyQueue.prototype.pop = function() {
  if (this.stack2.length > 0) {
    return this.stack2.pop()
  }

  if (this.stack1.length < 1) {
    return undefined
  }

  while(this.stack1.length > 1) {
    this.stack2.push(this.stack1.pop())
  }

  return this.stack1.pop()
}

MyQueue.prototype.peek = function() {
  if (this.stack2.length > 0) {
    return this.stack2[this.stack2.length - 1]
  }

  return this.stack1[0]
}

MyQueue.prototype.empty = function() {
  return Math.max(this.stack1.length, this.stack2.length) === 0
}

const queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
console.log(queue.pop())
queue.push(5)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
// console.log(queue.peek())
// console.log(queue.pop())
// console.log(queue.empty())