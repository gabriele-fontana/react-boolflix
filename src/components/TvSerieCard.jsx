import ReactCountryFlag from "react-country-flag";
import { useGlobalContext } from "../context/GlobalContext";
import placeHolderImg from "../assets/generic_movie.png"

export default function TvSerieCard({ item }) {
    const { renderStars, img_url } = useGlobalContext();
    

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 bg-black text-white border-0 movie-card position-relative overflow-hidden shadow">

                <img
                    src={item.poster_path ? `${img_url}${item.poster_path}` : placeHolderImg}
                    className="card-img h-100 object-fit-cover"
                    alt={item.name}
                />

                <div className="card-info-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-3 text-center bg-dark bg-opacity-75">
                    <h5 className="fw-bold">{item.name}</h5>
                    <p className="small text-secondary mb-1">{item.original_name}</p>
                    <div className="mb-2">
                        <ReactCountryFlag countryCode={
                            item.original_language === 'en' ? 'GB' :
                            item.original_language === 'ja' ? 'JP' :
                            item.original_language === 'he' ? 'IL' :
                            item.original_language === 'zh' ? 'CN' :
                            item.original_language.toUpperCase()
                        }
                        svg/>
                    </div>
                    
                    <div className="fs-5">{renderStars(item.vote_average)}</div>
                    <span className="badge bg-primary mt-3 align-self-center">SERIE TV</span>
                </div>
            </div>
        </div>
    );
}