import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/index'
import Filme from './pages/Filme/index'
import Header from './Components/Header/index'

function RoutesApp(){
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/filme/:id' element={<Filme/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutesApp