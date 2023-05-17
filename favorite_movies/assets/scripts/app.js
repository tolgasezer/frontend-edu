const addMovieBtn = document.getElementById('addMovieBtn');
const modalBlock = document.getElementById('add-modal');
const backDropBlock = document.getElementById('backdrop');
const cancelBtn = modalBlock.querySelector('.btn--passive');
const addBtn = cancelBtn.nextElementSibling;
const userInputs = modalBlock.querySelectorAll('input');
const entryText = document.getElementById('entry-text');


const movies = [];

const udpateUI = ()=>{
    if (movies.length === 0){
        entryText.style.display = 'block';
    }else {
        entryText.style.display = 'none';
    }
};

const newMovieRender = (title, imageUrl, rating) =>{
    const newMovieEl = document.createElement('li');
    newMovieEl.className = 'movie-element';
    newMovieEl.innerHTML = `
        <div class= "movie-element__image">
            <img src ="${imageUrl}" alt="${title}"> 
        <div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 Stars</p>
        <div>
        `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieEl);

}

const resetUserInput = ()=>{
    userInputs.forEach(input => {
        input.value = '';
    })
};

const toggleMovieModal= ()=>{
    modalBlock.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    backDropBlock.classList.toggle('visible');

};

const backdropHandler = ()=>{
    toggleMovieModal();
}
const addMovieHandler = ()=>{
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
    udpateUI();
    newMovieRender(newMovie.title, newMovie.imageUrl, newMovie.rating);
};

const cancelMoviehandler = () =>{
    resetUserInput();
    toggleMovieModal();
}

addMovieBtn.addEventListener('click', toggleMovieModal);
cancelBtn.addEventListener('click', cancelMoviehandler);
backDropBlock.addEventListener('click',backdropHandler);
addBtn.addEventListener('click', addMovieHandler);