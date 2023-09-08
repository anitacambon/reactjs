import { useState, useEffect } from 'react'
import { getProduct, getProductByCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [product, setProduct] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductByCategoria : getProduct
            asyncFunc(categoriaId)
                .then(response => {
                    setProduct(response)
                })
                .catch(error => {
                    console.error(error)
                })
    },[categoriaId])

    useEffect(() => {
        getProduct()
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList product={product} />
        </div>
    )
}

export default ItemListContainer