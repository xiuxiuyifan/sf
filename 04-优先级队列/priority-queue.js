const Queue = require('../03-队列/queue')
//优先级队列


//特征  在入队的时候会根据优先级大小进行入队，自身节点有两个属性，优先级和自身数据


//优先级节点元素
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue extends Queue {

  constructor() {
    super()
  }


  //入队
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority)
    //如果当前队列为空，则直接入队
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      //当前入队的元素和队列中已有的元素的优先级大小进行比较，如果插入的元素的优先级小于队列里面的元素的优先级，那么久插在这个元素之前
      //表示是否插入
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if(queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if(!added) {
        this.items.push(queueElement)
      }
    }
  }

  //出队
  dequeue() {
    super.dequeue()
  }
  //查看队头元素

  front() {
    super.dequeue()
  }

  //查看队列是否为空
  isEmpty() {
    super.isEmpty()
  }

  //查看队列长度
  size() {
    super.size()
  }

  // 打印当前队列元素

  print() {
    return this.items.map((item)=>item.element).join(" ")
  }
}

module.exports = PriorityQueue