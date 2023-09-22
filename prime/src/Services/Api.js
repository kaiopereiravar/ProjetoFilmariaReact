import axios from 'axios'

//url da api: https://api.themoviedb.org/3/
//parametros da api: /movie/now_playing?api_key=b18d76fcb8e5fccc3053f772b4c9fa0c

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api