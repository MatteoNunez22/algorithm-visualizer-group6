import { render } from '@testing-library/react';
import React from 'react';
import '../Style/StackAndQueue.css';
import * as d3 from 'd3';

function StackAndQueue() {
	const width = window.innerWidth;
	var mainSvg = d3.select('body').append('svg').attr('id', 'main-svg').attr('width', width).attr('height', 600);
	return (
		<div className = 'center'>
			<p >Stack and Queue</p>
			<label>
				User-Defined-List:
				<input type="text" id="user-defined-list" />
			</label>
			<button onClick={CreateStackAnaQueue}>Create</button>
			<br />
			<br />
			<button onClick={createArrayFromStack}>Create array by popping the stack elements</button>
			<button onClick={createArrayFromQueue}>Create array by dequeuing the queue</button>
			<br />
			<br />
			<div className="container">

				<div id="stack" className="stackContainer">
			
				</div>
				<div id="queue" className="queueContainer">

				</div>
			</div>
		</div>
	);
}

function createArrayFromStack() {
	const userInput = document.getElementById('user-defined-list').value;
	const stackArray = userInput.split(',').map(Number);
	console.log(stackArray);
	const container = document.getElementById('stack')
	container.innerHTML += `<h3 style="margin-right: 20px;">Stack Array</h3>`;
	stackArray.forEach(element => container.innerHTML += `<h1 class="item">${element}</h1>`)
}
function createArrayFromQueue() {
	const userInput = document.getElementById('user-defined-list').value;
	const stackArray = userInput.split(',').map(Number).reverse();
	const container = document.getElementById('queue')
	container.innerHTML += `<h3 style="margin-right: 20px;">Queue Array</h3>`;
	stackArray.forEach(element => container.innerHTML += `<h1 class="item">${element}</h1>`)
}

function CreateStackAnaQueue() {
	const userInput = document.getElementById('user-defined-list').value;
	const userList = userInput.split(',').map(Number);
	console.log(userList);
	drawStack(userList);
}

function drawStack(list) {
	var mainSvg = d3.select('#main-svg');
	mainSvg.selectAll('*').remove();
	let cy = 30;
	for (let num of list) {
		console.log(num);
		addCircle(40, cy, num, mainSvg);
		cy += 70;
	}
	let cx = 300;
	for (let num of list) {
		console.log(num);
		addCircle(cx, 40, num, mainSvg);
		cx += 70;
	}
	var text = mainSvg
		.append('text')
		.attr('x', 25)
		.attr('y', cy)
		.text('Stack')
		.attr('font-size', '20px')
		.attr('fill', 'black');

	var text = mainSvg
		.append('text')
		.attr('x', 300)
		.attr('y', 100)
		.text('Queue')
		.attr('font-size', '20px')
		.attr('fill', 'black');

	cx = 300;
	for (let i = 0; i < list.length - 1; i++) {
		addHorizontalLine(cx, mainSvg);
		cx += 70;
	}

	cy = 30;
	for (let i = 0; i < list.length - 1; i++) {
		addVerticalLine(cy, mainSvg);
		cy += 70;
	}
}

function addCircle(cx, cy, num, mainSvg) {
	var innerCircle = mainSvg
		.append('circle')
		.attr('cx', cx)
		.attr('cy', cy)
		.attr('r', 30)
		.attr('width', 30)
		.attr('height', 30)
		.attr('fill', '#333');
	var outterCircle = mainSvg
		.append('circle')
		.attr('cx', cx)
		.attr('cy', cy)
		.attr('r', 28)
		.attr('width', 30)
		.attr('height', 30)
		.attr('fill', '#FFF');
	var text = mainSvg
		.append('text')
		.attr('x', cx - 5)
		.attr('y', cy)
		.text(num)
		.attr('font-size', '20px')
		.attr('fill', 'black');
}

function addVerticalLine(cy, mainSvg) {
	var line = mainSvg
		.append('line')
		.attr('x1', 40)
		.attr('y1', cy + 30)
		.attr('x2', 40)
		.attr('y2', cy + 40)
		.attr('stroke-width', 3)
		.attr('stroke', 'black');
}

function addHorizontalLine(cx, mainSvg) {
	var line = mainSvg
		.append('line')
		.attr('x1', cx + 30)
		.attr('y1', 30)
		.attr('x2', cx + 40)
		.attr('y2', 30)
		.attr('stroke-width', 3)
		.attr('stroke', 'black');
}

export default StackAndQueue;