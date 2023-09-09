import { useState, useEffect } from 'react'
import { getProducts, getProductByCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? getProductByCategoria : getProducts
            asyncFunc(categoriaId)
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.error(error)
                })
    },[categoriaId])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
