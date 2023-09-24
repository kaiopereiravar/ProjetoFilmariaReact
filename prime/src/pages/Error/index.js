import { Link } from "react-router-dom"
import '../Error/style.css'

function Error() {
    return (
        <div className="not-found">
                <h1>404</h1>
                <h2>pagina nao encontrada</h2>
                <Link to="/">Veja todos os filmes</Link>
        </div>
    )
}

export default Error