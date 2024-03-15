// store/reducers/procurementReducer.js
const initialState = {
    procurements: [],
  };
  
  const ProcurementReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PROCUREMENT':
        return {
          ...state,
          procurements: [...state.procurements, action.payload],
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default ProcurementReducer;
  