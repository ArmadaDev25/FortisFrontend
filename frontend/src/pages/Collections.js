import CollectionsDisplay from "../components/collections_comps/CollectionsDisplay"
const Collections = (props) => {
    return (
        <>
            <h1>Card Collections</h1>
            <CollectionsDisplay collections={props.collections} deleteCollection={props.deleteCollection}/>
        </>
    )
}
export default Collections
