import '../styles/index.css'
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
