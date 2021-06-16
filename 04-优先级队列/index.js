const PriorityQueue = require('./priority-queue')


let queue = new PriorityQueue()


queue.enqueue(1, 1)
queue.enqueue(4, 4)
queue.enqueue(2, 2)
queue.enqueue(3, 3)
queue.enqueue(6, 6)
queue.enqueue(5, 5)

console.log(queue.print())