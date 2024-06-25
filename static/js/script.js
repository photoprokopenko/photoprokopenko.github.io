const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      document.querySelector('.up').classList.add('show');
    } else {
      document.querySelector('.up').classList.remove('show');
    }
  });
  
  document.querySelector('.up a').addEventListener('click', function(e) {
    e.preventDefault(); 
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })})