import { useGlobalContext } from "../context/GlobalContext"

export default function AppNavbar(){

    const {title, setTitle, handleSubmit } = useGlobalContext()

    return(
        <nav className="navbar navbar-dark bg-black ">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                
                <h1>
                    BOOLFLIX
                </h1>

                
                <form className="d-flex gap-2" onSubmit={handleSubmit}>
                    <input
                        className="form-control bg-dark text-white border-secondary"
                        type="search"
                        placeholder="Cerca film o serie..."
                        aria-label="Search"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="btn btn-outline-danger fw-bold" type="submit">
                        CERCA
                    </button>
                </form>

            </div>
        </nav>
        
    )

}