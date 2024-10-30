function ItemDetail ({detail}) {
    return (
        <div>
            <img src={detail?.images[0]} style={{width: 350}} />
            <h1>{detail?.title}</h1>
            <p>{detail?.description}</p>
        </div>
    )
}


export default ItemDetail