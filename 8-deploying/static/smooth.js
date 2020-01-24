setTimeout(() => {
  document.querySelector('[data-testid="datepicker-input"]').className =
    document.querySelector('[data-testid="datepicker-input"]').className +
    ' form-input'
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}, 500)
