const addMovieBtn = document.getElementById('addMovieBtn');
const modalBlock = document.getElementById('add-modal');
const backDropBlock = document.getElementById('backdrop');
const cancelBtn = modalBlock.querySelector('.btn--passive');
const addBtn = cancelBtn.nextElementSibling;
console.log(addBtn);


toggleMovieModal= ()=>{
    modalBlock.classList.toggle('visible');
    toggleBackdrop();
};

toggleBackdrop = ()=>{
    backDropBlock.classList.toggle('visible');

};

backdropHandler = ()=>{
    toggleMovieModal();
}
addMovieHandler = ()=>{

}

addMovieBtn.addEventListener('click', toggleMovieModal);
cancelBtn.addEventListener('click', toggleMovieModal);
backDropBlock.addEventListener('click',backdropHandler);
addBtn.addEventListener('click', addMovieHandler);