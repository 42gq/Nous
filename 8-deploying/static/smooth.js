setTimeout(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log(42)
    anchor.addEventListener('click', function(e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}, 2000)
