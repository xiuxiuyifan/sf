const Queue = require('./queue')
// 测试代码

// let queue = new Queue()



// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)

// console.log(queue)


//击鼓传花

// 有五个人A,B，C，D，E,F 围成一个圈，每次数到5的时候，从里面把这个人移除，直到圈里面只剩下一个人游戏结束


function passGame(data, num) {

  //先将圈里面的人依次入队

  let queue = new Queue()

  data.forEach(element => {
    queue.enqueue(element)
  });

  while (queue.size() > 1) {
    //没数到之前的人的处理方法
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  return queue.front()
}

console.log(passGame(['lily', 'lucy', 'tom', 'tony', 'jack'],4))