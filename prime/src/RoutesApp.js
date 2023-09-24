import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Filme from './pages/Filme/index'
import Header from './Components/Header/index'
import Error from './pages/Error'

function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/filme/:id' element={<Filme />}></Route>
                    
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutesApp