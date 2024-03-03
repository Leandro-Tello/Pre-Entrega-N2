import { useState, useEffect} from  'react'
import { getProducts, getProductByCategory } from './AsyncMock'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    console.log(typeof categoryId);
    console.log(categoryId);
    console.log(products);

    useEffect(() => {
        const asynFunc = categoryId ? getProductByCategory : getProducts

        asynFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;