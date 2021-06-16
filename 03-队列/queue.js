//队列可以抽象成生活中的排队

//先进先出

class Queue {

  constructor() {
    this.items = []
  }


  //入队
  enqueue(element) {
    this.items.push(element)
  }

  //出队

  dequeue() {
    return this.items.shift()
  }


  //找出队头元素
  front() {
    return this.items[0]
  }

  //查看队列是否为空

  isEmpty() {
    return this.items.length === 0
  }

  //查看队列元素长度

  size() {
    return this.items.length
  }

  //打印队列元素

  print() {
    return this.items.join(" ")
  }
}

module.exports = Queue