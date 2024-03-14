import NavBar from "./components/NavBar";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListCointainer";
import ItemDetailContainer from "./components/ItemDetailContainer"

function App(){

    return (
        <div>
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>ERROR 404</h1>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </div>
    )
}

export default App;