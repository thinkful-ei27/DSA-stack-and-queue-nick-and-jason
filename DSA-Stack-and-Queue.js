class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class _QNode {
  constructor(data, next, previous){
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  //FIFO
   enqueue(data){
    const node = new _QNode(data);

    if (this.first === null){
      this.first = node;
    }
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }


}

class Stack {
  constructor(){
    this.top = null;
  }
  //FOLI
  push(item){
    if (this.top === null){
      this.top = new _Node(item, null);
      return;
    }
    const node = new _Node(item, this.top);
    this.top = node;
  }

  pop(){
    if (this.top === null){
      console.log('Stack is empty');
      return new Error('Stack is empty');
    }
    let item = this.top;
    this.top = item.next;
    return item;
  }

}

const peek = stack  => {
  if (stack.top === null){
    console.log('Stack is empty');
    return new Error('Stack is empty');
  }
  return stack.top.data;
}

const display = stack => {
  if (stack.top === null){
    console.log('Stack is empty');
    return new Error('Stack is empty');
  }
  let node = stack.top;
  while(node !== null){
    console.log(node.data);
    node = node.next;
  }
}

//Palindromes
function is_palindrome(input){
  input = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const test = new Stack();
  for(let x = 0; x < input.length; x++){
    //if we want to make this binary, we can do input.length - x - 1 or something
    test.push(input.charAt(x))
  }
  let i = 0;
  while(test.top !== null){
    if(test.pop().data !== input[i]){
      return false;
    }
    i++;
  }
  return true;

}

const matching = string => {
  const stack = new Stack();
  for (let i = 0; i < string.length; i++){
      stack.push(string[string.length -1 - i]);
    }
  //ParensCounter
  let parensCounter = 0;
  // Square Brackets Counter
  let squareBracketsCounter = 0;
  // Curly Counter
  let curlyCounter = 0;
  //Generic Position Counter
  let position = 0;
  //Last Open Parens Variable
  let doKoDe = 0;
  //Last Open Brackets Counter
  let zaiNaer = 0;
  //Last Open Brace Counter
  let ou = 0;

  let lastOpened = new Stack();
  let popped = '';
  while(stack.top){
    position++;
    if (peek(stack) === '('){
      parensCounter++;
      doKoDe = position;
      lastOpened.push('(');
    }
    if (peek(stack) === ')'){
      parensCounter--;
      if (parensCounter<0){
        return new Error(`extra close parens at position: ${position}`)
      }
      popped = lastOpened.pop().data;
      if(popped !== '('){
        return new Error(`Expecting: ${popped} type bracket, but found ')' at position: ${position}`)
      }
    }
    if (peek(stack) === '['){
      squareBracketsCounter++;
      zaiNaer = position;
      lastOpened.push(']');
    }
    if (peek(stack) === ']'){
      squareBracketsCounter--;
      if (squareBracketsCounter<0){
        return new Error(`extra close square bracket at position: ${position}`)
      }
      popped = lastOpened.pop().data;
      if(popped !== '['){
        return new Error(`Expecting: ${popped} type bracket, but found ']' at position:${position}`)
      }
    }
    if (peek(stack) === '{'){
      curlyCounter++;
      ou = position;
      lastOpened.push('{');
    }
    if (peek(stack) === '}'){
      curlyCounter--;
      if (curlyCounter<0){
        return new Error(`extra close curly brace at position: ${position}`)
      }
      popped = lastOpened.pop().data;
      if(popped !== '{'){
        return new Error(`Expecting: ${popped} type bracket, but found '}' at position:${position}`)
      }
    }
    stack.pop();
  }
  if (parensCounter === 0 && squareBracketsCounter === 0 && curlyCounter === 0){
    return true;
  } else {
    if(parensCounter !== 0){
      return new Error(`extra open parens at position: ${doKoDe}.`);
    }
    if(squareBracketsCounter !== 0){
      return new Error(`Extra open square bracket at position: ${zaiNaer}.`);
    }
    if(curlyCounter !== 0){
      return new Error(`Extra open curly brace at position: ${ou}.`);
    }
  }
}

const sortStack = stack => {
  let tempStack = new Stack();
  tempStack.push(stack.pop().data);
  let tempVar = stack.pop().data;
  while(stack.top || tempVar){
    if(stack.top){
      if(tempVar > tempStack.top.data){
      tempStack.push(tempVar);
      tempVar = stack.pop().data;
      } else {
      stack.push(tempStack.pop().data);
      }
    } else if(tempVar > tempStack.top.data){
      tempStack.push(tempVar);
      tempVar = false;
    } else {
      stack.push(tempStack.pop().data);
    }
  }
  while(tempStack.top){
    stack.push(tempStack.pop().data);
  }
  display(stack);
}



function main(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(peek(starTrek));
  // display(starTrek);
  starTrek.pop();
  //Have to pop twice as McCoy is not on top
  starTrek.pop();
  // display(starTrek);
  // console.log(is_palindrome('madam'));
  // console.log(is_palindrome('12345678'));
  // console.log(is_palindrome(`0987654321234567890`));
  // console.log(matching('()'));
  // console.log(matching('(bob))'));
  // console.log(matching('((Help))IhaveFallen((andIcantGetUp())'));
  // console.log(matching('(sho(rter)'))
  //console.log(matching('(([]))'))
  //console.log(matching('(()())['));
  //console.log(matching('{{}'));
  //console.log(matching('{}}'));
  // console.log(matching('({)}'));
  //const numbStack = new Stack();
  //numbStack.push(5);
  //numbStack.push(8);
  //numbStack.push(3);
  //numbStack.push(9);
  //numbStack.push(6);
  //numbStack.push(7);
  //numbStack.push(2);
  //sortStack(numbStack);


  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  console.log(starTrekQ);
}

main();