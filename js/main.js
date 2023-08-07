// To add typing effect on lower part of Hero text

var i=0,text;
  text = "And I am a web developer.     "

  function typing(){
    var targetElement = document.getElementById("text");
    if (i < text.length) {
    targetElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 150);
  } else {
    
    targetElement.innerHTML = "";
    i = 0;
    setTimeout(startTypingLoop, 1000); 
  }
}
function startTypingLoop() {
  typing();
}
startTypingLoop();

// Listen for a click on button and toggle class to hide / display mini-menu

const myHamburgerButton = document.getElementsByClassName('my-hamburger-button')[0];
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0];

myHamburgerButton.addEventListener('click', () => {
	navBarLinks.classList.toggle('active');

});

// Validate form input (will overide HTML atributes if set - no JS then html will apply)
