const checkbox = document.getElementById('exampleCheck1')
const submitButton = document.getElementsByTagName('button')[0]

checkbox.addEventListener('click', function() {
  if (submitButton.hasAttribute('disabled')) {
    submitButton.removeAttribute('disabled')
  } else {
    submitButton.setAttribute('disabled', '')
  }
})

function confirmMessage() {
  alert('Thank you for submitting!')
}

function alertMessage() {
  alert('Please fill all the form with valid input')
}

function submitForm() {
  var inputElements = document.getElementsByTagName('input')

  var allRequiredAreFilled = true
  for (let index = 0; index < inputElements.length; index++) {
    const element = inputElements[index];
    
    if (element.hasAttribute('required') && (!element.value || !element.checkValidity())) {
      allRequiredAreFilled = false
      break
    } 
  }
  
  if (allRequiredAreFilled) {
    confirmMessage()
  } else {
    alertMessage()
  }
}

submitButton.addEventListener('click', submitForm)