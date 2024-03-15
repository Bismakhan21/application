// store/reducers/donorReducer.js
const initialState = {
    donors: [],
  };
  
  const DonorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DONOR':
        return {
          ...state,
          donors: [...state.donors, action.payload],
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default DonorReducer;
  