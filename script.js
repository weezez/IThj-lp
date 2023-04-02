const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        form.reset();
        alert('Thank you for your message!');
      } else {
        alert('Oops! Something went wrong. Please try again later.');
      }
    }
  };
  const formData = new FormData(form);
  xhr.send(new URLSearchParams(formData).toString());
});


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

