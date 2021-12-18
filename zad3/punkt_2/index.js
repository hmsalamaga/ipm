let dragged = null;

document.addEventListener("dragstart", ({target}) => {
	dragged = target;
});

document.addEventListener("dragover", (event) => {
		event.preventDefault();
});

document.addEventListener("drop", ({target, offsetX, offsetY}) => {
	if(target.id === 'platform') {
		dragged.remove(dragged);

		dragged.style.top = offsetY + 'px';
		dragged.style.left = offsetX + 'px';
		
		target.appendChild(dragged);
	}
});
