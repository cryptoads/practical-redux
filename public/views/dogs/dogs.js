const renderDogsApp = () => {
	let { dogs } = store.getState();
	console.log(dogs)
	console.log(dogs.message)
	return `

		<img src=${dogs.dog} /><br>
		<button onclick="dogsAction()">Dog</button>


	`
}