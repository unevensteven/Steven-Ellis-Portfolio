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

const validateForm = formSelector =>{
  const formElement = document.querySelector(formSelector);

    const validationOptions = [
      {      
      attribute:'required',
      isValid: input => input.value.trim() !== '',  //any content? trim removes any whitespaces
      errorMessage: (input, label) => `${label.textContent} is required`,
    },
    {
      attribute:'minLength',
      isValid: input => input.value && input.value.length >=parseInt(input.minLength, 10),
      errorMessage: (input, label) =>`${label.textContent} needs to be at least ${input.minLength} characters`,
    },
    {
      attribute: 'pattern',
      isValid: input => {
        const patternRegex = new RegExp(input.pattern);
        return patternRegex.test(input.value);
      },
      errorMessage: (input, label) => `Not a valid ${label.textContent}`,
    }
  ]

  const validateSingleFormGroup = formGroup => {
      const label = formGroup.querySelector('label');
      const input = formGroup.querySelector('input, textarea'); 
      const errorContainer = formGroup.querySelector('.error');
      const errorIcon = formGroup.querySelector('.error-icon');
      const successIcon = formGroup.querySelector('.success-icon');

      let formGroupError = false;
      for (const option of validationOptions) {
        if (input.hasAttribute(option.attribute) && !option.isValid(input)){
          errorContainer.textContent = option.errorMessage(input, label);
          input.classList.add('border-red-700');
          input.classList.remove('border-green-700');
          successIcon.classList.add('hidden');
          errorIcon.classList.remove('hidden');
          formGroupError = true;
        }
      }
      if (!formGroupError){
        errorContainer.textContent='';
        input.classList.add('border-green-700');
        input.classList.remove('border-red-700');
        successIcon.classList.remove('hidden');
        errorIcon.classList.add('hidden');
      }
    };

  formElement.setAttribute('novalidate', '');
  
    Array.from(formElement.elements).forEach(element =>{
      element.addEventListener('blur', event => {
        validateSingleFormGroup(event.srcElement.parentElement.parentElement);
      })
    })

  formElement.addEventListener('submit', event =>{
    event.preventDefault();
    validateAllFormGroups(formElement);
  });

  const validateAllFormGroups = formToValidate =>{
    const formGroups = Array.from(formToValidate.querySelectorAll('.formGroup'));

    formGroups.forEach(formGroup => {
      validateSingleFormGroup(formGroup);
    });
  }
};

validateForm('#registrationForm');
