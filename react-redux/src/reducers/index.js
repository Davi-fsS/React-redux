import { combineReducers } from 'redux'
import { reducers as fruitReducers } from './fruit.reducer'

//file to combine all reducers
const reducers = combineReducers({
    fruitReducers
})

export { reducers }
