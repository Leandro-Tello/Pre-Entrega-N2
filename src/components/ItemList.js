import Item from './Item'

let ItemList = ({ products }) => {
    return(
        <div>
            {
            products.length > 0 ?
            products.map(prod => <Item key={prod.id} {...prod} />)
            :<p>Cargando...</p>
            
            }
        </div>
    )
}

export default ItemList;