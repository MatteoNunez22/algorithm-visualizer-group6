import React from "react";
import { Router } from "@reach/router";
import Homepage from "./Homepage";
import CreateArray from "./CreateArray";
import LinearSortArray from "./LinearSortArray";
import StackAndQueue from "./StackAndQueue";
import PopAndDequeue from "./PopAndDequeue";

function Application() {
    return (
        <Router>
            <Homepage path="/" />
            <CreateArray path = "createArray" />
            <LinearSortArray path = "linearSortArray" />
            <StackAndQueue path = "stackAndQueue" />
            <PopAndDequeue path = "popAndDequeue" />
        </Router>
    );
  }
  
  export default Application;
  