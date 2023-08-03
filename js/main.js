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

const myHamburgerButton = document.getElementsByClassName('my-hamburger-button')[0];
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0];

myHamburgerButton.addEventListener('click', () => {
	navBarLinks.classList.toggle('active')

})

