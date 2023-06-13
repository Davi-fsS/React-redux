import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/fruits.action";

const AddingFruit = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const dispach = useDispatch()

    const addFruit = (e) => {
        e.preventDefault();

        const fruit = {
            id: new Date(),
            name,
            quantity
        }

        dispach(actions.add(fruit))
    }

    return <form onSubmit={addFruit}>
        <input
            type="text"
            value={name}
            name={name}
            placeholder="Fruit"
            onChange={(e) => setName(e.target.value)}
            required
        />
        <input
            type="number"
            value={quantity}
            name={quantity}
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
            required
        />

        <button type="submit">Add</button>
    </form>
}

export default AddingFruit
