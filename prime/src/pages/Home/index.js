import { useState, useEffect } from "react"
import api from "../../Services/Api"
import { Link } from "react-router-dom"
import '../Home/style.css'

function Home() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: "b18d76fcb8e5fccc3053f772b4c9fa0c",
                    language: "pt-br",
                    page: 1
                }
            })

            console.log(response.data.results.slice(0, 5))
            setFilmes(response.data.results.slice(0, 20))
            setLoading(false)
        }

        loadFilmes()
    })

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
                <div className="spinner"></div>
            </div>
        )
    }


    return (

        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>

    )
}

export default Home