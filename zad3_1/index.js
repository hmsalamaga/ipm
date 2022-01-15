const boxHeight = 50;
const boxWidth = 50;

let dragged = null;
let shiftLeft = null;
let shiftTop = null;

document.addEventListener("dragstart", ({target, clientX, clientY}) => {
	dragged = target;
	const rect = dragged.getBoundingClientRect();
	shiftLeft = clientX - rect.left;
	shiftTop = clientY - rect.top;
});

document.addEventListener("dragover", (event) => {
		event.preventDefault();
});

document.addEventListener("drop", ({target, clientX, clientY, layerX, layerY}) => {
	const pageX = clientX - shiftLeft;
	const pageY = clientY - shiftTop;

	if(isTargetPlatform(target, pageX, pageY)) {
			moveBox(layerX, layerY, target);
	}
});

const isTargetPlatform = (target, pageX, pageY) => {
	return target.id === 'platform' && isAllCollide(pageX, pageY, 'platform') && !isCollide(pageX, pageY, 'box');
}

const isCollide = (x, y, elClassName) => {
	const corners = prepareCorners(x, y);
	for (let corner of corners) {
		let el = document.elementFromPoint(corner[0], corner[1])
		if (el.className === elClassName) {
			return true;
		}
	}
	
	return false;
}

const isAllCollide = (x, y, elClassName) => {
	const corners = prepareCorners(x, y);
	for (let corner of corners) {
		let el = document.elementFromPoint(corner[0], corner[1])
		if (el.className !== elClassName) {
			return false;
		}
	}
	
	return true
}

const prepareCorners = (x, y) => {
	const topLeft = [x, y];
	const topRight = [x + boxWidth, y];
	const bottomLeft = [x, y + boxHeight];
	const bottomRight = [x + boxWidth, y + boxHeight];

	return [topLeft, topRight, bottomLeft, bottomRight];
}

const moveBox = (layerX, layerY, target) => {
	const destX = layerX - shiftLeft;
	const destY = layerY - shiftTop;

	dragged.remove(dragged);

	dragged.style.left = destX + 'px';
	dragged.style.top = destY + 'px';

	target.appendChild(dragged);
}

const generateBox = () => {
	let boxesDiv = document.getElementById('boxes');
	let div = document.createElement('div');
	div.setAttribute('class', 'box');
	div.setAttribute('draggable', true);
	div.setAttribute('style', `background-color: ${randomColor()}`);
	console.log(div);

	boxesDiv.appendChild(div);
}

const  randomColor = () => {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}