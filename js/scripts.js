function flip(element) {
		if ((element.children[0].style.display === "block") || (element.children[0].style.display === "")){
			element.children[0].style.display = "none";
			element.children[1].style.display = "block";
	}	
		else {
			element.children[0].style.display = "block";
			element.children[1].style.display = "none";
		}
}



	function restart() {
		var back = document.getElementsByClassName('back');
		console.log(back);
		for (i = 0; i<back.length; i++){
			back[i].style.display = "block";
		}
		var front = document.getElementsByClassName('front');
		for (i = 0; i<front.length; i++){
			front[i].style.display = "none";
		}
}