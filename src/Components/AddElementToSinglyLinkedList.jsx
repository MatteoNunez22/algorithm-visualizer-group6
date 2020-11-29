import React from "react";
import "../Style/AddElementToSinglyLinkedList.css";

function AddElementToSinglyLinkedList() 
{
    let list = [];
    let listLength = 0; // The length of the list
    let animationDelay = 400; // the amount of milliseconds to pause between frames of the animation

    // Update the list elements and their values on the screen and highlight an element
    function updateElements(indexToHighlight)
    {
        // Update innerHtml code for the list elements
        let innerHtml = ""; // The html code to use

        for (let i = 0; i < listLength; i++)
        {
            if (i === indexToHighlight)
            {
                innerHtml += "<td><div id=\"element" + i + "\" class=\"squareHighlighted\">" + list[i] + "</div></td>" + "\n" + "<td><div id=\"arrow0" + i + "\" class=\"arrow right\"></div></td>";
            }
            else
            {
                innerHtml += "<td><div id=\"element" + i + "\" class=\"square\">" + list[i] + "</div></td>" + "\n" + "<td><div id=\"arrow0" + i + "\" class=\"arrow right\"></div></td>";
            }
        }

        innerHtml += "<td><div id=\"element10\" class=\"square\">null</div></td>"

        document.getElementById("elementTable").innerHTML = innerHtml;

        // Update innerHtml code for the list indexes
        innerHtml = ""; // The html code to use

        for (let i = 0; i < listLength; i++)
        {
            innerHtml += "<td><div class=\"elementIndex\">" + i + "</div></td>\n" + "<td><brIndex></brIndex></td>\n";
        }

        document.getElementById("indexesTable").innerHTML = innerHtml;
    }

    function addElementAnimation()
    {
        let targetIndex = parseInt(document.getElementById("elementIndexToAdd").value);
        let targetValue = parseInt(document.getElementById("elementValueToAdd").value);

        if (isNaN(targetIndex) || targetIndex < 0) { // Return if not a number or if negative
            return;
        }

        if (targetIndex > listLength)
        {
            targetIndex = listLength;
        }
        
        addElement(0, targetIndex, targetValue);
       
        
    }


    function addElement(currentIndex, targetIndex, targetValue) {
        
        updateElements(currentIndex);

        if (currentIndex === targetIndex + 2) // We have passed the target index and added the element
        {
            // Update the value of the element added
            list[targetIndex] = targetValue;
            updateElements(-1);
        }
        else // We have not yet added the element
        {
            if (currentIndex === targetIndex + 1) // We have passed the target index
            {
                // Update the list to add the element (with an empty value)
                list.splice(targetIndex, 0, ""); 
                listLength = list.length;
                updateElements(targetIndex);
            }

            setTimeout(function() {addElement(currentIndex + 1, targetIndex, targetValue);}, animationDelay); // Continue moving to the target index after a delay
        }

    }

    function addElementFromTail(currentIndex, targetIndex, targetValue) {
        
        updateElements(currentIndex);

        if (currentIndex === targetIndex + 2) // We have passed the target index and added the element
        {
            // Update the value of the element added
            list[targetIndex] = targetValue;
            updateElements(-1);
        }
        else // We have not yet added the element
        {
            if (currentIndex === targetIndex + 1) // We have passed the target index
            {
                // Update the list to add the element (with an empty value)
                list.splice(targetIndex, 0, ""); 
                listLength = list.length;
                updateElements(targetIndex);
            }

            setTimeout(function() {addElement(currentIndex - 1, targetIndex, targetValue);}, animationDelay); // Continue moving to the target index after a delay
        }

    }

    function displayPseudocode() {
        let pseudocode = document.getElementById("pseudocode");
        pseudocode.style.width="600px";
        pseudocode.style.height="400px";
        pseudocode.innerHTML = "# The class for a node\nclass Node:\n     # Fields\n     int value\n     Node next\n\n     # Constructor\n     Node(int value, Node next):\n          this.value <- value\n          this.next <- next\n\n# The class for the singly linked list\nclass SinglyLinkedList\n     # Fields\n     Node head\n\n     # Constructor\n     SinglyLinkedList(Node firstNode):\n          head <- firstNode\n\n     # Method to add an element at an index to the singly linked list\n     bool addAt(int index, int value):\n          if index < 0:\n               return false\n\n          Node newNode <- new Node(value, null)\n\n          if head == null:\n               head <- newNode\n               return true\n\n          if index == 0:\n               Node temp <- head.next\n               head.next <- newNode\n               newNode.next <- temp\n               return true\n\n          Node currentNode <- head\n          Node prevNode <- head\n          for currentIndex from 0 to index-2:\n               if currentNode == null:\n                    return break\n               prevNode <- currentNode\n               currentNode <- currentNode.next\n\n          if currentNode == null:\n               prevNode.next <- newNode\n               return true\n\n          Node temp <- currentNode.next\n          currentNode.next <- newNode\n          newNode.next <- temp\n          return true\n";
    }

    return (
        <div id="container">
            <p>Add Element to Singly Linked List</p>
            <div id="array">
                <p>List</p>
                <table id="indexesTable">
                    <tr>
                        <td><brIndex></brIndex></td>
                    </tr>
                </table>
                <br></br>
                <br></br>
                <table id="elements">
                    <tr id="elementTable">
                        <td><div id="element10" class="square">null</div></td>
                    </tr>       
                </table>
                <br></br>
                <p id="elementTitle">Elements</p>
                <div class="row">
                    <div>
                        <p>Index</p>
                        <input type="text" id="elementIndexToAdd"></input>
                        <p>Value</p>
                        <input type="text" id="elementValueToAdd"></input>
                    </div>
                </div>
                <br></br>
                <button onClick={addElementAnimation}>ADD ELEMENT</button>
                <button onClick={displayPseudocode}>DISPLAY PSEUDOCODE</button>
                <br></br>
                <br></br>
                <textarea id="pseudocode" name="pseudocode" readonly></textarea>
            </div>
        </div>
    );
}

export default AddElementToSinglyLinkedList;
