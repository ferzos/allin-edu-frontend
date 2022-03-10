const checkbox = document.getElementById('exampleCheck1')
const submitButton = document.getElementsByTagName('button')[0]

checkbox.addEventListener('click', function() {
  if (submitButton.hasAttribute('disabled')) {
    submitButton.removeAttribute('disabled')
  } else {
    submitButton.setAttribute('disabled', '')
  }
})

submitButton.addEventListener('click', function() {
  alert('Thank you for submitting!')
})