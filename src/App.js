import Layout from "./components/Pages/Layout";
import Nosotros from './components/Pages/Nosotros';
import Productos from "./components/Pages/Productos";
import Producto from "./components/Pages/Producto";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){

    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/Nosotros' element={<Nosotros/>}/>
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='/productos/:productoId' element={<Producto/>}/>
            <Route path="*" element={<h1>ERROR 404</h1>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;