// double queue
// var MyStack = function() {
//   this.queue1 = [] // only shift and push
//   this.queue2 = [] 
// }

// MyStack.prototype.push = function(x) {
//   if (this.queue2.length > 0) {
//     this.queue2.push(x)
//   } else {
//     this.queue1.push(x)
//   }
// }

// // queue1 确定有数据 queue2为空
// function queueSwitch(queue1, queue2) {
//   if (queue1.length === 0) {
//     return undefined
//   }

//   while(queue1.length > 0) {
//     const e = queue1.shift();
//     if (queue1.length === 0) {
//       return e
//     } else {
//       queue2.push(e)
//     }
//   }
// }

// MyStack.prototype.pop = function() {
//   const queue1 = this.queue1
//   const queue2 = this.queue2

//   if (queue2.length > 0) {
//     return queueSwitch(queue2, queue1)
//   } else {
//     return queueSwitch(queue1, queue2)
//   }
// }

// MyStack.prototype.top = function() {
//   const queue1 = this.queue1
//   const queue2 = this.queue2

//   if (queue2.length > 0) {
//     return queue2[queue2.length - 1]
//   } else {
//     return queue1[queue1.length - 1]
//   }
// }

// MyStack.prototype.empty = function() {
//   return Math.max(this.queue1.length, this.queue2.length) === 0
// }

// single queue, when pop, shift the element then push to queue immediately until the last one
var MyStack = function() {
  this.queue = [] // only shift and push
}

MyStack.prototype.push = function(x) {
  this.queue.push(x)
}

MyStack.prototype.pop = function() {
  if (this.queue.length === 0) {
    return undefined
  }

  let count = this.queue.length - 1
  while (count > 0) {
    const e = this.queue.shift()
    this.queue.push(e)
    count--
  }

  return this.queue.shift()
}

MyStack.prototype.top = function() {
  return this.queue[this.queue.length - 1]
}

MyStack.prototype.empty = function() {
  return this.queue.length === 0
}

const stack = new MyStack()
stack.push(1)
stack.push(2)
console.log(stack.pop())
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())