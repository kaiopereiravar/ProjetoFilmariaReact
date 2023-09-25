import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../Services/Api'
import '../Filme/filmesInfo.css'
import {toast} from 'react-toastify'

function Filmes() {
    const { id } = useParams()
    const navigate = useNavigate(true)

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "b18d76fcb8e5fccc3053f772b4c9fa0c",
                    language: "pt-br",
                }
            })

            .then((response) => {//se a requisicao de cima der certo, executa esse casos de sucesso
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                navigate("/", {replace: true})//para caso nao achar o filme, ele redirecionar o use para uma tela
                return
            })
        }

        loadFilme()

        return () => {//Após a saida da pagina, ele executa essa funcao anonima
            console.log('componente foi desmontado')
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeFlix")

        let filmesSalvos = JSON.parse(minhaLista) || [] //para ele buscar do local storage e converter em json, caso nao exista trazer uma lista vazia
    
        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)//retorna um booleano

        if(hasFilme){
            toast.warn('Esse filme ja esta na sua lista!!!')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos))
        toast.success('filme salvo com sucesso!!!')
    }

    if (loading) {//se loading for falso, ele executa a funçao loading
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>{/*O objetive é que antes de executar os banners, caso a net do usuario esteja lenta, ele executa essa funçao*/}
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' real="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filmes