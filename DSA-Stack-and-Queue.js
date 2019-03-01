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

function main(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(peek(starTrek));
  display(starTrek);
}

main();