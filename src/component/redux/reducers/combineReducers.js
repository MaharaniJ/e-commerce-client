import {getProductreducer} from './productReducers'
import {combineReducers} from "redux"

const rootreducers = combineReducers({
    getProductdata:getProductreducer
})
export default rootreducers;
