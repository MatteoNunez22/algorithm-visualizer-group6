import React from "react";
import { Link } from "@reach/router";
import "../Style/CreateArray.css"
import $ from "jquery";

function CreateArray() {

    let array = [];

    function getElements(event){
        let value = event.currentTarget.value;

        array = value.split(',');
        $("#displayArray").html(array);
        console.log(array);
    }

    function fillArray(event){
        let id = "#element";
        let i;
        for (i=0; i<10; i++) {
            if (array[i] != null) {
                id = "#element" + i
                console.log(id);
                $(id).html(array[i]);
            }
        }
    }

    return (
        <div className="center">
            <p className="title">Create Array</p>

            <p>Enter 10 Elements (separated by commas)</p>
            <input
                type="text"
                placeholder="E.g. 1,2,3,4,5,6,7,8,9,10"
                id="arrayInput"
                onChange = {(event) => getElements(event)}
            />

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
                <button onClick={() => fillArray()}>CREATE</button>
            </div>

            <Link to="/">Back to Homepage</Link>
        </div>
    );
}
  
export default CreateArray;