// services/donorService.js
import { database } from '../index';
import { ref, push, onValue, update } from 'firebase/database';

// Add a new donor to Firebase Realtime Database
export const addDonor = async (donor) => {
  try {
    const donorsRef = ref(database, 'donors');
    await push(donorsRef, donor);
    console.log('Donor added successfully');
  } catch (error) {
    console.error('Error adding donor:', error);
  }
};

// Fetch all donors from Firebase Realtime Database
export const fetchDonors = (callback) => {
  const donorsRef = ref(database, 'donors');
  onValue(donorsRef, (snapshot) => {
    const donors = [];
    snapshot.forEach((childSnapshot) => {
      donors.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    callback(donors);
  });
};

// Update donor information in Firebase Realtime Database
export const updateDonor = async (donorId, updatedDonor) => {
  try {
    const donorRef = ref(database, `donors/${donorId}`);
    await update(donorRef, updatedDonor);
    console.log('Donor updated successfully');
  } catch (error) {
    console.error('Error updating donor:', error);
  }
};
