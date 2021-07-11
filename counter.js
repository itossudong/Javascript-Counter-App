//Variable declaration.

let counter = 0;

let counterValue = document.querySelector('.counter-value');
let addCount = document.querySelector('.add-count');
let lowerCount = document.querySelector('.lower-count');

addCount.addEventListener('click', function (){
				if (counter < 50){
								counter++;
								counterValue.innerHTML = counter;
				}
});

lowerCount.addEventListener('click', function (){
				if (counter > 0){
								counter--;
								counterValue.innerHTML = counter;
				}
});