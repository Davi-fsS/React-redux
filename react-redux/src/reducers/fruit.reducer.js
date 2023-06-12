import actionTypes from "../constants/fruits";

const initial_state = {
    fruits: [
        {
            id: 1,
            name: "Grape",
            quantity: 20
        },
        {
            id: 2,
            name: "Apple",
            quantity: 5
        }
    ]
}

//SEMPRE tem que retornar um novo estado

const reducers = (state = initial_state, action) => {
    switch (action.type) {
        case actionTypes.ADD_FRUIT:
            return { fruits: [...state.fruits, { ...action.payload }] }  //pegando tudo e adicionando um novo obj
        case actionTypes.REMOVE_FRUIT:
            return { fruits: state.fruits.filter(x => x.id !== action.payload.id) }
        default:
            return state
    }
}

export { reducers };

