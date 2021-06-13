//采用Es5  的写法来写。

function Stack() {
  //用来存储数据
  this.items = []
}

//定义栈的基本操作

//1. 把元素压入栈中
Stack.prototype.push = function (element) {
  this.items.push(element)
}
//2. 从栈中取出元素
Stack.prototype.pop = function () {
  return this.items.pop()
}

//3. 查看一下栈顶元素
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1]
}

//4. 判断栈是否为空
Stack.prototype.isEmpty = function () {
  return this.items.length === 0
}

//5. 获取栈中的元素个数
Stack.prototype.size = function () {
  return this.items.length
}

//6. 查看当前栈里面的内容

Stack.prototype.print = function () {
  return this.items.join(' ')
}


module.exports = Stack


