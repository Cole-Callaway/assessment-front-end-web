const rubberDuck = document.querySelector('img')
rubberDuck.addEventListener('mouseover', () => {
 alert(`Look don't touch!!! `)
})

console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Submited')
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);