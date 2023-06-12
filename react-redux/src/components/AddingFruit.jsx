import { useState } from "react";

const AddingFruit = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const addFruit = (e) => {
        e.preventDefault();

        const fruit = {
            id: new Date(),
            name,
            quantity
        }

        console.log(fruit)
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
