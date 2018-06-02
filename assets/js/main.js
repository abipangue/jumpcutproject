 /**
  * Javascripts
  *
 **/

function getVideo() {
    var name = document.form.name;
    var email = document.form.email;

    if (name && email !== '') {
    	return alert ("I'm Jumpcut's web developer");
    }
}

window.onload = function() { 

	var modal = document.getElementById('modal');

	// Get the button that opens the modal
	var btn = document.getElementById("btn");
	var videoBtn = document.getElementById("videoBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	videoBtn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}


}