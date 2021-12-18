let dragged;
let index;
let indexDrop;
let list;

document.addEventListener("dragstart", ({target}) => {
		dragged = target;
		list = target.parentNode.children;
		
		for(let i = 0; i < list.length; i += 1) {
			if(list[i] === dragged){
				index = i;
			}
		}
});

document.addEventListener("dragover", (event) => {
		event.preventDefault();
});

document.addEventListener("drop", ({target}) => {
	if(target.className == "element" && target !== dragged) {
		dragged.remove(dragged);

		for(let i = 0; i < list.length; i += 1) {
			if(list[i] === target){
				indexDrop = i;
			}
		}

		if(index > indexDrop) {
			target.before(dragged);
		} else {
			target.after(dragged);
		}
	}
});
