const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	sendForm();
});

function sendForm() {
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const phone = document.querySelector('#phone').value;
	const message = document.querySelector('#message').value;

	const data = {
		name: name,
		email: email,
		phone: phone,
		message: message
	};

	const xhr = new XMLHttpRequest();

	xhr.open('POST', 'send-email.php', true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onload = function() {
		if (this.status === 200) {
			alert('Your message has been sent successfully!');
			form.reset();
		} else {
			alert('There was an error sending your message. Please try again later.');
		}
	};

	xhr.send(JSON.stringify(data));
}


function updateBox() {
    var box = document.getElementById("box");
    var date = new Date();
    var hour = date.getHours();
    
    if (hour >=17 && hour <22) {
      box.innerHTML = "Open";
      box.style.backgroundColor = "green";
      box.style.color = "white";
      
      } else {
        box.innerHTML = "Closed";
        box.style.backgroundColor = "red";
        box.style.color = "black";
        
        }
  }
  setInterval(updateBox,1000);

