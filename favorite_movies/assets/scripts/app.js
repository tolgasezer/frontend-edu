const addMovieBtn = document.getElementById('addMovieBtn');
const modalBlock = document.getElementById('add-modal');
const backDropBlock = document.getElementById('backdrop');
const cancelBtn = document.getElementsByClassName('modal__actions');
const cancelBtnbtn = cancelBtn[0];

toggleMovieModal= ()=>{
    modalBlock.classList.toggle('visible');
    backDropControl();
}

backDropControl = ()=>{
    backDropBlock.classList.toggle('visible');

}

addMovieBtn.addEventListener('click', toggleMovieModal);
cancelBtnbtn.addEventListener('click', toggleMovieModal);