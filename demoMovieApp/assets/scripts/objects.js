const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');


let movie = [];

const addMovieBtnHandler = () =>{
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    
    if ( title.trim()=== '' || extraName.trim()==='' || extraValue.trim()===''){
        return;
    };

    const movieObj = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    };
    
    movie.push(movieObj);
    console.log(movieObj);
    

};

const searchBtnHandler =() =>{};


addMovieBtn.addEventListener('click', addMovieBtnHandler);
searchBtn.addEventListener('click', searchBtnHandler); 

