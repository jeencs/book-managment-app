

	const imageBoxes = document.getElementsByClassName("img-box");
	
	
	// method for seaching a book in the list
	function searchBook() {
		
		const searchTerm = document.getElementById("search").value;
		
		for(let imgBox of imageBoxes) {
			if(imgBox.innerText.indexOf(searchTerm) < 0) {
				imgBox.classList.add("hide-img-box");
			} else {
				imgBox.classList.remove("hide-img-box");
			}
		}
		
		
	}
	
	
	

