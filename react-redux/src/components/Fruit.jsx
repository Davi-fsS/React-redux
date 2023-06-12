const Fruit = ({ fruit }) => {
    return <div>
        <ul>
            <li>
                <strong>Fruit: </strong> {fruit.name}
            </li>
            <li>
                <strong>Quantity: </strong> {fruit.quantity}
            </li>
        </ul>
        <button onClick={() => alert('removing fruit')}>Remove</button>
    </div>
}

export default Fruit
