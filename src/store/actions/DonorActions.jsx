// store/actions/donorActions.js
// export const addDonor = (donor) => ({
//     type: 'ADD_DONOR',
//     payload: donor,
//   });


  import { database } from '../../config/index';

export const addDonor = (donor) => {
  return async (dispatch) => {
    // Push donor data to Firebase Realtime Database
    try {
      await push(ref(database, 'donors'), donor);
      dispatch({ type: 'ADD_DONOR', payload: donor });
    } catch (error) {
      console.error('Error adding donor:', error);
    }
  };
};