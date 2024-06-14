navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
   element.addEventListener("click", function(){
     navbar.forEach(nav=>nav.classList.remove("active"))
     this.classList.add("active");
   })
})
// JavaScript to ensure navbar responsiveness based on window size
window.addEventListener('resize', function() {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth > 800) {
        navbar.style.bottom = 'auto';
        navbar.style.top = '0';
    } else {
        navbar.style.top = 'auto';
        navbar.style.bottom = '0';
    }
});

// Initialize the navbar position based on initial window size
window.dispatchEvent(new Event('resize'));

  document.addEventListener('DOMContentLoaded', () => {
    const visibleItems = document.querySelectorAll('.badan.visible');
    visibleItems.forEach(item => item.style.display = 'flex');
  });

  function showAll() {
    const bksbadan = document.querySelector('.bksbadan');
    bksbadan.style.overflowX = 'visible'; // Matikan horizontal scrolling
    bksbadan.style.flexWrap = 'wrap'; // Tampilkan semua item dalam mode blok biasa
    const images = document.querySelectorAll('.badan');
    images.forEach(image => {
      image.style.display = 'flex'; // Menampilkan semua gambar
    });
    // Sembunyikan tombol setelah semua gambar ditampilkan
    document.querySelector('.show-all').style.display = 'none';
  }
  
        let currentIndex = 0;

        function moveSlide(direction) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;

            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        function autoSlide() {
            moveSlide(1);
        }

        setInterval(autoSlide, 3000); // Change slide every 3 seconds