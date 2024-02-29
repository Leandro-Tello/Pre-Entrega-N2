import Producto from "./Pages/Productos";

function ItemListCointainer({mensaje}){
    return(
        <div>
        <h1>{mensaje}</h1>
        <Productos/>
        </div>
    )
}

export default ItemListCointainer;