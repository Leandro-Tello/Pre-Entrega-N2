import NavBar from "../NavBar";
import listaProductos from "../data";
import { Link } from "react-router-dom";
import "../Styles/StyleProductos.css";

function Productos(){
    return (
        <div>
            <NavBar/>
            <h1>Productos</h1>
            <div className="galeria">
                {listaProductos.map((producto)=>{
                    return (
                        <article key={producto.id}>
                            <h5>{producto.title}</h5>
                            <img src={producto.image} alt={producto.description}/>
                            <Link to={`/productos/${producto.id}`}>Mas info</Link>
                        </article>
                    );
                })}
            </div>
        </div>
        
    )
}

export default Productos;