import { useState, useEffect} from  'react'
import { getProductById } from './AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    let { itemId } = useParams()
    itemId = Number(itemId);

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;