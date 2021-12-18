let dragged = null;
let startLeft = null;
let startTop = null;

document.addEventListener("dragstart", ({target, offsetX, offsetY, clientX, clientY}) => {
	dragged = target;
	startLeft = (offsetX || clientX - $(target).offset().left);
	startTop = (offsetY || clientY - $(target).offset().top);
});

document.addEventListener("dragover", (event) => {
		event.preventDefault();
});

document.addEventListener("drop", ({target, offsetX, offsetY}) => {
	if(target.id === 'platform') {
		dragged.remove(dragged);

		dragged.style.top = (offsetY - startTop) + 'px';
		dragged.style.left = (offsetX - startLeft) + 'px';

		target.appendChild(dragged);
	}
});

function randomColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

function generateBox() {
	let color = randomColor();

	let boxesDiv = document.getElementById('boxes');
	let div = document.createElement('div');
	div.className = 'box';
	div.draggable = true;
	div.style = `background-color: #${color}`;

	boxesDiv.appendChild(div);
}