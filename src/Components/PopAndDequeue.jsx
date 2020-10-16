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
      <br/><button onClick={handleEntryChange}>
        Initialize stack and queue
      </button>
    </div>
  );
}

function handleEntryChange(){
  entry = document.getElementById("entry").value;
  for(let i=0; i<entry; i++){
    stack.push('a');
    queue.push('a');
  }
  console.log(entry);
  console.log(stack);
}


export default PopAndDequeue;