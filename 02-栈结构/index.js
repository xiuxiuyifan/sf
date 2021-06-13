const Stack = require('./stack')

// var stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)

// console.log(stack)               //Stack { items: [ 1, 2, 3, 4, 5 ] }

// stack.pop()

// console.log(stack)              //Stack { items: [ 1, 2, 3, 4 ] }

// console.log(stack.peek())       //4

// console.log(stack.isEmpty())    //false

// console.log(stack.size())       //4

// console.log(stack.print())      //1 2 3 4


//栈的应用 


//十进制转二进制

// 10  5 0 

// 5   2 1

// 2   1 0

// 1   0 1

// 1010

function dec2bin(dec) {
  let stack = new Stack()

  while (dec > 0) {
    //进栈
    stack.push(dec % 2)
    dec = Math.floor(dec / 2)
  }
  let bin = ""
  while (!stack.isEmpty()) {
    bin += stack.pop();
  }
  return bin
}

let bin = dec2bin(10)

console.log(bin)

