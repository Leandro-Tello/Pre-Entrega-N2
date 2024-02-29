import NavBar from "../NavBar";
import {Link , useParams } from "react-router-dom";
import listaProductos from "../data"
import "../Styles/StyleProductos.css";


function Producto(){

    const {productoId} = useParams();

    const producto = listaProductos.find( (producto)=>producto.id == productoId);
    
    const { image , title , description,price } = producto;
 
    return (
    <div>
        <NavBar/>
        <div className="galeria">
            <article>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{price} $</h3>
            </article>
            <Link to="/Productos">Volver</Link>
        </div>
    </div>
    )
}


export default Producto;