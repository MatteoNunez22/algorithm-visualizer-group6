import React from "react";
import "../Style/LinearSortArray.css"

function LinearSortArray() {
    let array = [];

    function randomArrayGenerate() {
        let arrayLength = 10;
        for (let i = 0; i < arrayLength; i++) {
            array[i] = Math.floor((Math.random() * 10) + 1);
        }
        let idBeginning = "element";
        for (let j = 0; j < arrayLength; j++) {
            let id = idBeginning.concat(j);
            document.getElementById(id).innerHTML = array[j];
        }
        console.log('Random array generated.');
    }

    function sortCurrentArray() {
        let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i - 1;
            while ((j > -1) && (current < array[j])) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = current;
        }
        let idBeginning = "element";
        for (let j = 0; j < array.length; j++) {
            let id = idBeginning.concat(j);
            document.getElementById(id).innerHTML = array[j];
        }
        console.log('Array sorted.');
    }

    return (
        <div id="container">
            <p>Linear Sort Array</p>
            <div id="array">
                <p>Indexes</p>
                <div id="indexes">
                    <div className="elementIndex">0</div>
                    <div className="elementIndex">1</div>
                    <div className="elementIndex">2</div>
                    <div className="elementIndex">3</div>
                    <div className="elementIndex">4</div>
                    <div className="elementIndex">5</div>
                    <div className="elementIndex">6</div>
                    <div className="elementIndex">7</div>
                    <div className="elementIndex">8</div>
                    <div className="elementIndex">9</div>
                </div>
                <div id="arrows">
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                    <i class="arrow down"></i>
                </div>
                <div id="elements">
                    <div id="element0" className="square">A</div>
                    <div id="element1" className="square">B</div>
                    <div id="element2" className="square">C</div>
                    <div id="element3" className="square">D</div>
                    <div id="element4" className="square">E</div>
                    <div id="element5" className="square">F</div>
                    <div id="element6" className="square">G</div>
                    <div id="element7" className="square">H</div>
                    <div id="element8" className="square">I</div>
                    <div id="element9" className="square">J</div>
                </div>
                <p id="elementTitle">Elements</p>
                <button onClick={randomArrayGenerate}>RANDOM</button>
                <br></br>
                <button onClick={sortCurrentArray}>SORT</button>
            </div>
        </div>
    );
}

export default LinearSortArray;