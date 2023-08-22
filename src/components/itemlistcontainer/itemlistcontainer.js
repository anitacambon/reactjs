import './css/style.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h2 className="greeting" >{greeting}</h2>
        </div>
    )
}

export default ItemListContainer