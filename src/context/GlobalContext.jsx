import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [title, setTitle] = useState("")
    const [movies, setMovies] = useState([])
    const [tvSeries, setTvSeries] = useState([])

    const api_key = import.meta.env.VITE_API_KEY;
    const img_url = 'https://image.tmdb.org/t/p/w342';
    function handleSubmit(e) {

        e.preventDefault()

        const movies_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}`
        const tv_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${title}`


        fetch(movies_url)
            .then(res => res.json())
            .then((data) => {

                setMovies(data.results)

            })

        fetch(tv_url)
            .then(res => res.json())
            .then(data => {
                setTvSeries(data.results)
            })
    }

    function renderStars(vote) {
        const stars = []
        const starsNumb = Math.ceil(vote / 2)
        for (let index = 1; index <= 5; index++) {
            if (index <= starsNumb) {
                stars.push(<i key={Math.random()} className="bi bi-star-fill text-warning"></i>)
            } else {
                stars.push(<i key={Math.random()} className="bi bi-star text-muted"></i>);
            }

        }
        return stars

    }

    return (
        <GlobalContext.Provider value={{ movies, tvSeries, title, setTitle, handleSubmit, renderStars, img_url }}>
            {children}
        </GlobalContext.Provider>
    );
};

function useGlobalContext(){ 
    
    const context = useContext(GlobalContext);
   
    return context
}

export { GlobalProvider, useGlobalContext} 