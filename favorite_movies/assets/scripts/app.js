const addMovieBtn = document.getElementById('addMovieBtn');
const modalBlock = document.getElementById('add-modal');
const backDropBlock = document.getElementById('backdrop');
const cancelBtn = modalBlock.querySelector('.btn--passive');
const addBtn = cancelBtn.nextElementSibling;
const userInputs = modalBlock.querySelectorAll('input');
const entryText = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');



const movies = [];

const udpateUI = ()=>{
    if (movies.length === 0){
        entryText.style.display = 'block';
    }else {
        entryText.style.display = 'none';
    }
};

const deleteMovie = movieId =>{
    let movieIndex=0;
    for(const movie of movies){
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    };
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    cancelMovieDeletion();

};

const cancelMovieDeletion = ()=>{
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
    
};

const removeElementHandler = (movieId) =>{
    
    toggleBackdrop();
    deleteMovieModal.classList.add('visible');
    //deleteMovie(movieId);
    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    const confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletionBtn.addEventListener('click', cancelMovieDeletion);
    confirmDeletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));

   
};

const newMovieRender = (id, title, imageUrl, rating) =>{
    const newMovieEl = document.createElement('li');
    newMovieEl.className = 'movie-element';
    newMovieEl.innerHTML = `
        <div class= "movie-element__image">
            <img src ="${imageUrl}" alt="${title}"> 
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 Stars</p>
        </div>
        `;
    const listRoot = document.getElementById('movie-list');
    newMovieEl.addEventListener('click', removeElementHandler.bind(null, id));
    listRoot.append(newMovieEl);

}

const resetUserInput = ()=>{
    userInputs.forEach(input => {
        input.value = '';
    })
};

const closeMovieModal = ()=>{
    modalBlock.classList.remove('visible');
    
    
};

const showMovieModal = ()=>{

    modalBlock.classList.add('visible');
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    backDropBlock.classList.toggle('visible');

};

const backdropHandler = ()=>{
    closeMovieModal();
    cancelMovieDeletion();
    resetUserInput();
   
}
const addMovieHandler = ()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue< 1 || +ratingValue > 5){
        alert('Please input valid number ');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    resetUserInput();
    toggleBackdrop();
    newMovieRender(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
    udpateUI();
};

const cancelMoviehandler = () =>{
    resetUserInput();
    closeMovieModal();
    toggleBackdrop();
}

addMovieBtn.addEventListener('click', showMovieModal);
cancelBtn.addEventListener('click', cancelMoviehandler);
backDropBlock.addEventListener('click',backdropHandler);
addBtn.addEventListener('click', addMovieHandler);
