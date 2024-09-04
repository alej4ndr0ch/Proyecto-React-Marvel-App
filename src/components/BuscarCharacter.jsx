import { useState } from "react"
 
export const BuscarCharacter = ({buscarCharacter}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        buscarCharacter(query);
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input 
                            className="form-control me-2 border p-3 mb-2 bg-danger text-white" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn btn-outline-warning border p-3 mb-2 bg-danger text-white" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </>
    );
}