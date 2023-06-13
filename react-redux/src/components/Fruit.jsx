import { useDispatch } from "react-redux"
import { actions } from "../actions/fruits.action"

const Fruit = ({ fruit }) => {

    const dispatch = useDispatch()

    const removingFruit = () => {
        dispatch(actions.remove(fruit))
    }

    return <div className="fruit">
        <ul>
            <li>
                <strong>Fruit: </strong> {fruit.name}
            </li>
            <li>
                <strong>Quantity: </strong> {fruit.quantity}
            </li>
        </ul>
        <button onClick={removingFruit}>x</button>
    </div>
}

export default Fruit
