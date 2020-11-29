import React from "react";
import { Link } from "@reach/router";
import "../Style/Homepage.css"

function Homepage() {
    return (
        <div>
            <p>Homepage</p>

            <Link to="createArray">Create Array</Link><br />
            <Link to="linearSortArray">Linear Sort Array</Link><br />
            <Link to="stackAndQueue">Stack and Queue</Link><br />
            <Link to="popAndDequeue">Pop and Dequeue</Link><br />
            <Link to="addElementToSinglyLinkedList">Add Element to Singly Linked List</Link><br />
            <Link to="removeElementFromSinglyLinkedList">Remove Element from Singly Linked List</Link><br />
            <Link to="updateElementFromDoublyLinkedList">Update Element from Doubly Linked List</Link><br />
        </div>
    );
}

export default Homepage;