import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

function App() {
  
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([])
  const [tvSeries, setTvSeries] = useState([])
  const api_key = import.meta.env.VITE_API_KEY
  

  function handleSubmit(e){

    e.preventDefault()

    const movies_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}`
    const tv_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${title}`

    fetch(movies_url)
    .then(res => res.json())
    .then((data) => {
      
      setMovies(data.results)
      console.log(movies);
      
      
    })

    fetch(tv_url)
    .then(res => res.json())
    .then(data => {
      setTvSeries(data.results)
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
                style={{ marginLeft: '10px', width: '2em', height: '1.5em' }}
                onError={(e) => {
                  e.target.style.display = 'none'; 
                }}/>
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
    <div className="tvSerie-list">
      {tvSeries.length > 0 ? (
        tvSeries.map((tvSerie) => (
          <div key={tvSerie.id}>
            <h2>{tvSerie.name}</h2>
            <p><strong>Titolo Originale:</strong> {tvSerie.original_name}</p>
            <p><strong>Lingua:</strong>
              <ReactCountryFlag countryCode={
                tvSerie.original_language === 'en' ? 'GB' :
                tvSerie.original_language === 'ja' ? 'JP' :
                tvSerie.original_language === 'he' ? 'IL' :
                tvSerie.original_language === 'zh' ? 'CN' :
                tvSerie.original_language.toUpperCase()
              }
                svg
                style={{ marginLeft: '10px', width: '2em', height: '1.5em' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }} />
              <span>
                ({tvSerie.original_language.toUpperCase()})
              </span>
            </p>
            <p><strong>Voto:</strong> {tvSerie.vote_average.toFixed(1)} / 10</p>
          </div>
        ))
      ) : (
        <p>Nessuna serie cercata o trovata.</p>
      )}
    </div>

   </>
  )
}

export default App
