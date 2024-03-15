// store/reducers/index.js
import { combineReducers } from 'redux';
import DonorReducer from './DonorReducer';
import ProcurementReducer from './ProcurementReducer';

const rootReducer = combineReducers({
  donor: DonorReducer,
  procurement: ProcurementReducer,
});

export default rootReducer;
