import '../styles/index.css'
import 'glider-js'
import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

// pegar elementos do modal
const modal = document.getElementById('app-modal');
const modalBtn = document.getElementById('modal-btn');
const span = document.getElementsByClassName("close-modal")[0]

// logica para abrir e fechar modal
modalBtn.onclick = () => {
  console.log('test')
  modal.style.display = 'block'
}

span.onclick = () => {
  modal.style.display = 'none'
}
/* quando clickar fora do modal, modal fecha */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}


var $simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  itemWidth: 'auto',
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});

new Glider($responsiveCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  itemWidth: 'auto',
  draggable: true,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});