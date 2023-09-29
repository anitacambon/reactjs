import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    const { id } = useParams()
    useEffect(() => {
        const docRef = doc(db, 'products', id)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer