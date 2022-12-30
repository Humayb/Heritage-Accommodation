import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Rooms from './pages/rooms/rooms'
import NotFound from './pages/notfound/notfound'
import Menu from './component/menu/menu'
import './App.css'

export default function Main(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu />}>
                    <Route index element={<Home/>} />
                    <Route path='rooms' element={<Rooms/>} />
                    <Route path='*' element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
