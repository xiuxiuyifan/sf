//单向链表


// 在内存中是不连续的，并且容易扩展，插入和删除
// 不容易通过下标查询


class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }


  //添加方法
  append(data) {
    let newNode = new Node(data)
    //先检测链表里面是否有元素
    if (this.length === 0) {
      //让链表的头指向新创建的节点

      this.head = newNode
      this.length++
    } else {
      //找最后一个节点，如果找到了，就把最后一个节点的next 指向当前新的节点
      let current = this.head
      //如果当前节点的下一个节点有值，
      while (current.next) {
        current = current.next
      }
      current.next = newNode
      this.length++
    }
  }

  //插入元素
  insert(position, data) {
    let newNode = new Node(data)
    //先进行插入边界的判断, 插入的位置不能是负数，插入的位置不能大于链表本身的长度
    if (position < 0 || position > this.length) {
      return false
    } else {
      //插入的位置在链表的开始位置
      if (position === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let index = 0
        let current = this.head
        let previous
        while (index < position) {
          index++
          previous = current
          current = current.next
        }
        //找到了
        newNode.next = current
        previous.next = newNode
      }
    }
  }
  //获取指定位置的data
  getData(position) {
    //边界检测
    if (position < 0 || position > this.length) return false
    let index = 0
    let current = this.head
    while (index < position) {
      current = current.next
      index++
    }
    return current.data
  }


  //返回指定data 的index(位置)

  indexOf(data) {
    let index = 0
    let current = this.head
    let finded = false
    while (current) {
      if (current.data === data) {
        finded = true
        break
      }
      current = current.next
      index++
    }
    return finded ? index : -1
    //遍历如果找到了就返回index否则返回-1
  }


  //update, 修改指定位置的data

  update(position, data) {
    //位置边界检测
    if (position < 0 || position > this.length) return null

    //遍历
    let index = 0
    let current = this.head
    while (index < position) {
      current = current.next
      index++
    }
    current.data = data
    return data
  }

  //删除指定位置的节点
  removeAt(position) {
    //位置边界检测
    if (position < 0 || position > this.length) return null
    let index = 0
    let current = this.head
    //删除的是开始的位置
    if (position === 0) {
      this.head = this.head.next
      return this.head.data
    } else {
      let previous
      while (index < position) {
        index++
        previous = current
        current = current.next
      }
      previous.next = current.next
      return current.data
    }
  }

  //删除指定数据的节点
  remove(data) {
    return this.removeAt(this.indexOf(data))
  }

  print() {
    let current = this.head
    let linkedString = ""
    //如果当前节点为空的时候，就表示已经遍历完了。
    while (current) {
      linkedString += current.data + " "
      current = current.next
    }
    return linkedString
  }
}

module.exports = LinkedList