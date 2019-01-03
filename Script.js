document.onload = setTimeout(function () { 
	let userChoice = confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please'); 
	if (userChoice) { window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";};
	}
	, 10000);

let buttonVal = document.querySelector('button');
let iBody = document.querySelector('body').style;
buttonVal.addEventListener('click', function() {
		if (buttonVal.textContent === "Go to Fucking Mode Psychedelique") {
			iBody.color = "blue";
			iBody.backgroundColor ="#FF00FF";
			iBody.fontFamily = "Papyrus";
			colorChange("Green","Comic Sans");
			buttonVal.textContent = "Go back to fucking Boring Mode";
		} else {
			iBody.color = "black";
			iBody.backgroundColor ="white";
			iBody.fontFamily = "Arial";
			colorChange("Black", "Arial");
			buttonVal.textContent = "Go to Fucking Mode Psychedelique";
		};
	}
	);

function colorChange(hiColor, hiFont){
	var elements = document.querySelectorAll('h1');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = hiColor;
        elements[i].style.fontFamily = hiFont;
    }	var elements = document.querySelectorAll('h2');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = hiColor;
        elements[i].style.fontFamily = hiFont;
    }	var elements = document.querySelectorAll('h3');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = hiColor;
        elements[i].style.fontFamily = hiFont;
    }
};