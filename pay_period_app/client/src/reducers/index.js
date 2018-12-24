import { combineReducers } from 'redux';
import payPeriodReducer from './payPeriod_index'

const rootReducer = combineReducers({
    payPeriod: payPeriodReducer
})

export default rootReducer
