import axios from "axios";
import { useEffect, useState } from "react";

const Tasty = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {
                from: '0',
                size: '20',
                tags: 'under_30_minutes'
            },
            headers: {
                'X-RapidAPI-Key': 'e7bd91d0a0mshefa487790ee2198p12d639jsna7a4cceb37b0',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        (async() => {
            try {
                const response = await axios.request(options);
                setRecetas(response.data.results);
            } catch (error) {
                console.error(error);
            }
        })();

    }, []);

    return (
        <div className="container">
            <div className="row">
                {recetas.map(receta => (
                    <div key={receta.id} className="col-md-3">
                        <div class="card">
                            <img src={receta.thumbnail_url} class="img-fluid" alt={receta.name} />
                            <div class="card-body">
                                <h3>{receta.name}</h3>
                                <p class="card-text">{receta.description}</p>
                                <p class="fw-light">Tiempo de preparación: <b>{receta.prep_time_minutes} minutos</b></p>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Tasty;