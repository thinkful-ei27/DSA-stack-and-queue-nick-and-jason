class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
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
  return stack.top;
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
  const test1 = new Stack();
  const test2 = new Stack();
  for(let x = 0; x < input.length; x++){
    test1.push(input.charAt(x));
    test2.push(input.charAt(input.length - 1 - x))
  }
  let node1 = test1.top;
  let node2 = test2.top;
  while(node1 && node2){
    if(node1.data !== node2.data){
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return true;

}

const matching = string => {
  const stack = new Stack();
  for (let i = 0; i < string.length; i++){
      stack.push(string[string.length -1 - i]);
    }
  console.log(stack);
  let node = stack.top;
  let counter = 0;
  let position = 0;
  while(node){
    if (node.data === '('){
      counter++;
    }
    if (node.data === ')'){
      counter--;
    }
    position++;
    if (counter<0){
      return new Error(`extra close parens at position: ${position}`)
    }
    node = node.next;
  }
  if (counter === 0){
    return true;
  } else {
    return new Error(`extra open parens somewhere`);
  }
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
  //  console.log(is_palindrome(`0987654321234567890`));
  console.log(matching('()'));
  console.log(matching('(bob))'));
  console.log(matching('(()'));
}

main();