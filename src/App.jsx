import { useGlobalContext } from "./context/GlobalContext";
import AppNavbar from "./components/AppNavbar";
import MovieCard from "./components/MovieCard";
import TvSerieCard from "./components/TvSerieCard";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const { movies, tvSeries } = useGlobalContext();
    
  return (
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
  )
}

export default App

