const addMovieBtn = document.getElementById('addMovieBtn');
const modalBlock = document.getElementById('add-modal');
const backDropBlock = document.getElementById('backdrop');
const cancelBtn = modalBlock.querySelector('.btn--passive');
const addBtn = cancelBtn.nextElementSibling;
const userInputs = modalBlock.querySelectorAll('input');


const movies = [];

resetUserInput = ()=>{
    userInputs.forEach(input => {
        input.value = '';
    })
}

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
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue === '' || imageUrlValue === '' || ratingValue === '' || +ratingValue< 1 || +ratingValue > 5){
        alert('Please input valid number ');
        return;
    }
    const newMovie = {
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    resetUserInput();
};
cancelMoviehandler = () =>{
    resetUserInput();
    toggleMovieModal();
}

addMovieBtn.addEventListener('click', toggleMovieModal);
cancelBtn.addEventListener('click', cancelMoviehandler);
backDropBlock.addEventListener('click',backdropHandler);
addBtn.addEventListener('click', addMovieHandler);