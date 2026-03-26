import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

function App() {
  
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([])
  const api_key = import.meta.env.VITE_API_KEY
  

  function handleSubmit(e){

    e.preventDefault()

    const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}`

    fetch(api_url)
    .then(res => res.json())
    .then((data)=>{
      
      setMovies(data.results)
      console.log(movies);
      
      
    })
  }
  
  return (
   <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
      <button>Search</button>
    </form>

    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
            <p><strong>Lingua:</strong> 
              <ReactCountryFlag  countryCode={
                movie.original_language === 'en' ? 'GB' :
                movie.original_language === 'ja' ? 'JP' :
                movie.original_language === 'he' ? 'IL' :
                movie.original_language === 'zh' ? 'CN' :
                movie.original_language.toUpperCase()
              }
                svg
                style={{ marginLeft: '10px', width: '2em', height: '1.5em' }}/>
              <span>
                 ({movie.original_language.toUpperCase()})
              </span>
            </p>
            <p><strong>Voto:</strong> {movie.vote_average.toFixed(1)} / 10</p>
          </div>
        ))
      ) : (
        <p>Nessun film cercato o trovato.</p>
      )}
    </div>

   </>
  )
}

export default App
