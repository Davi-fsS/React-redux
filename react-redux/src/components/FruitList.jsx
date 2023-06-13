import { useSelector } from "react-redux"
import AddingFruit from "./AddingFruit"
import Fruit from "./Fruit"

const FruitList = () => {

    //fruitReducers because it has the index.js that combines all reducers
    const fruits = useSelector((state) => state.fruitReducers.fruits)

    return <>
        <h1>Fruits List</h1>
        <AddingFruit />
        {fruits.map(item => <Fruit key={item.id} fruit={item} />)}
    </>
}

export default FruitList
