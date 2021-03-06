import React from "react";
import { Router } from "@reach/router";
import Homepage from "./Homepage";
import CreateArray from "./CreateArray";
import LinearSortArray from "./LinearSortArray";
import StackAndQueue from "./StackAndQueue";
import PopAndDequeue from "./PopAndDequeue";
import AddElementToSinglyLinkedList from "./AddElementToSinglyLinkedList";
import RemoveElementFromSinglyLinkedList from "./RemoveElementFromSinglyLinkedList";
import UpdateElementFromDoublyLinkedList from "./UpdateElementFromDoublyLinkedList"

function Application() {
    return (
        <Router>
            <Homepage path="/" />
            <CreateArray path = "createArray" />
            <LinearSortArray path = "linearSortArray" />
            <StackAndQueue path = "stackAndQueue" />
            <PopAndDequeue path = "popAndDequeue" />
            <AddElementToSinglyLinkedList path = "addElementToSinglyLinkedList" />
            <RemoveElementFromSinglyLinkedList path = "removeElementFromSinglyLinkedList" />
            <UpdateElementFromDoublyLinkedList path = "updateElementFromDoublyLinkedList" />
        </Router>
    );
  }
  
  export default Application;
  