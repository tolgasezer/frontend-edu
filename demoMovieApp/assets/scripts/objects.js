const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');


let movies = [];

const renderMovie = (filter = '')=>{
    const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0){
        movieList.classList.remove('visible');
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

    filteredMovies.forEach((movie)=>{
        const movieEl = document.createElement('li');
        let text = movie.info.title + " - ";
        for (const key in movie.info){
            if (key !== 'title'){
                text = text + `${key}: ${movie.info[key]}`
            }
            
        }
        
        movieEl.textContent = text;
        movieList.appendChild(movieEl);
    })
}

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

    
    movies.push(movieObj);
    renderMovie();

};

const searchBtnHandler =() =>{
    const filterTerm = document.getElementById('filter-title').value;
    renderMovie(filterTerm);
};


addMovieBtn.addEventListener('click', addMovieBtnHandler);
searchBtn.addEventListener('click', searchBtnHandler); 

