// pages/DonorForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDonor } from '../store/actions/DonorActions';

const DonorForm = () => {
  const dispatch = useDispatch();
  const [donor, setDonor] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDonor((prevDonor) => ({
      ...prevDonor,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDonor(donor));
   
    // Clear the form after submission
    setDonor({});
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Donor Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Name:</label>
          <input type="text" id="name" onChange={handleChange} value={donor.name || ''} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block">Blood Group:</label>
          <input type="text" id="bloodGroup" onChange={handleChange} value={donor.bloodGroup || ''} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block">Phone:</label>
          <input type="text" id="phone" onChange={handleChange} value={donor.phone || ''} className="border rounded px-2 py-1" />
        </div>
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" onChange={handleChange} value={donor.email || ''} className="border rounded px-2 py-1" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default DonorForm;
