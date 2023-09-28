const CollectionDisplayCards = ({cards}) =>{
    console.log(cards)
    const displayCardArray = cards.map((ele, index) => {
        return(
            <h1>{ele.name}</h1>
        )
    })
    return (
        <div>
            {displayCardArray}
        </div>
    )


}
export default CollectionDisplayCards
