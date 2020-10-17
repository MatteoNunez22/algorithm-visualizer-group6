import React from "react";
import "../Style/PopAndDequeue.css"

let entry = 0;
let stack = [];
let queue = [];
function PopAndDequeue() {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.

  return (
    <div>
      <p>Pop and Dequeue</p>
      <label>
        Entry &nbsp;
        <input type="text" id="entry"/>
      </label> 
      <br/><button id="initButton" onClick={handleEntryChange}>
        Initialize stack and queue
      </button>
      <br/><button onClick={popAndDequeue}>
        Pop and dequeue
      </button>
    </div>
  );
}

function handleEntryChange(){
  entry = document.getElementById("entry").value;
  
  if(entry>0){
    document.getElementById("initButton").disabled = true;
  }
  
  for(let i=1; i<=entry; i++){
    stack.push(i);
    queue.push(i);
  }
  
  // console.log(entry);
  // console.log(stack);
}

function popAndDequeue(){
  while(stack.length > 0){
    console.log('stack '+stack);
    stack.pop();
  }
  while(queue.length > 0){
    console.log('queue '+queue);
    queue.shift();
  }
}


export default PopAndDequeue;