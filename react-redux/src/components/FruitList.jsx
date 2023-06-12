import AddingFruit from "./AddingFruit"
import Fruit from "./Fruit"

const FruitList = () => {

    const fruits = [
        {
            id: 1,
            name: "Pinapple",
            quantity: 5
        },
        {
            id: 2,
            name: "Apple",
            quantity: 12
        }
    ]

    return <>
        <h1>Fruits List</h1>
        <AddingFruit />
        {fruits.map(item => <Fruit key={item.id} fruit={item} />)}
    </>
}

export default FruitList
