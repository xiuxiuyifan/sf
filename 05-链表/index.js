const LinkedList = require('./linked-list')


const linkedList = new LinkedList()


linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)

console.log(linkedList.remove(4))

console.log(linkedList.print())