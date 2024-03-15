import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDonor } from '../store/actions/DonorActions';

const DonorForm = () => {
  const dispatch = useDispatch();
  
  // State to manage form data
  const [donor, setDonor] = useState({
    name: '',
    bloodGroup: '',
    email: '',
    phone: '',
    medicalDetails: '',
  });

  // Handler to update form data on input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setDonor((prevDonor) => ({
      ...prevDonor,
      [id]: value,
    }));
  };

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add donor
    dispatch(addDonor(donor));
    // Clear the form after submission
    setDonor({
      name: '',
      bloodGroup: '',
      email: '',
      phone: '',
      medicalDetails: '',
    });
  };

  return (
    <div>
      <h2>Donor Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={donor.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            value={donor.bloodGroup}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={donor.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={donor.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="medicalDetails">Medical Details:</label>
          <textarea
            id="medicalDetails"
            value={donor.medicalDetails}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonorForm;
