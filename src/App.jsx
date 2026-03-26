import { useGlobalContext } from "./context/GlobalContext";
import AppNavbar from "./components/AppNavbar";
import MovieCard from "./components/MovieCard";
import TvSerieCard from "./components/TvSerieCard";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { movies, tvSeries } = useGlobalContext();
  /* const [title, setTitle] = useState('')
  const [movies, setMovies] = useState([])
  const [tvSeries, setTvSeries] = useState([])
  const api_key = import.meta.env.VITE_API_KEY
  const img_url = 'https://image.tmdb.org/t/p/w342'
   */
  
  /* function handleSubmit(e){

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
  } */

  /* function renderStars(vote){
    const stars = []
    const starsNumb = Math.ceil(vote/2)
    for (let index = 1; index <= 5; index++) {
      if (index <= starsNumb){
        stars.push(<i key={Math.random()} className="bi bi-star-fill text-warning"></i>)
      }else{
        stars.push(<i key={Math.random()} className="bi bi-star text-muted"></i>);
      }
      
    }
    return stars

  } */
  
  return (
   <>
    {/* <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
      <button>Search</button>
    </form> */}

    {/* <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            {movie.poster_path &&(
              <img src={`${img_url}${movie.poster_path}`} alt="movie.original_title" />)}
            <h2>{movie.title}</h2>
            <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
            <p><strong>Tipo: </strong> Film</p>
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
            <p><strong>Voto:</strong> {renderStars(movie.vote_average)}</p>
          </div>
        ))
      ) : (
        <p>Nessun film cercato o trovato.</p>
      )}
    </div> */}


    {/* <div className="tvSerie-list">
      {tvSeries.length > 0 ? (
        tvSeries.map((tvSerie) => (
          <div key={tvSerie.id}>
            <h2>{tvSerie.name}</h2>
            {tvSerie.poster_path && (
              <img src={`${img_url}${tvSerie.poster_path}`} alt="movie.original_name" />)}
            <p><strong>Titolo Originale:</strong> {tvSerie.original_name}</p>
            <p><strong>Tipo: </strong> Serie Tv</p>
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
            <p><strong>Voto:</strong> {renderStars(tvSerie.vote_average)}</p>
          </div>
        ))
      ) : (
        <p>Nessuna serie cercata o trovata.</p>
      )}
    </div> */}

    <div className="min-vh-100 bg-dark text-white">
      <AppNavbar />
      <main className="container py-5">

        {movies.length > 0 && (
          <section className="mb-5">
            <h2 className="mb-4 border-start border-danger border-4 ps-2">Film</h2>
            <div className="row">
              {movies.map(movie => <MovieCard key={movie.id} item={movie} type="Film" />)}
            </div>
          </section>
        )}

        {tvSeries.length > 0 && (
          <section>
            <h2 className="mb-4 border-start border-danger border-4 ps-2">Serie TV</h2>
            <div className="row">
              {tvSeries.map(tv => <TvSerieCard key={tv.id} item={tv} type="Serie TV" />)}
            </div>
          </section>
        )}

      </main>
    </div>
   </>
  )
}

export default App

