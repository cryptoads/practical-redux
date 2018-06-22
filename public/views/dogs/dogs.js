const renderDogsApp = () => {
	let { dogs } = store.getState();
	let { isLoading, dog, error } = dogs;
	console.log(dogs)
	console.log(dogs.message)
	return `
					${isLoading 
				? `<h1> LOADING... </h1>`
				: error
				  ? `<h1>${error}</h1>`
				  : `<div>
						<img src=${dog} /><br>
				     </div>`
			}
		
		<button onclick="dogsAction()">Dog</button>


	`
}