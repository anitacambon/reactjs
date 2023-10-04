import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoria } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoria
            ? query(collection(db, 'items'), where('categoria', '==', categoria))
            : collection(db, 'items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false))
    }, [categoria])

    return (
        <div>
            {
            loading 
            ? <p>Cargando...</p>
            : <div>
                <h1>{greeting}</h1>
                <ItemList products={products} />
            </div>
            }
        </div>
    )
}

export default ItemListContainer
