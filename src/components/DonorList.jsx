// components/DonorList.jsx
import React, { useEffect, useState } from 'react';
import { fetchDonors } from '../config/services/DonorService';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonors(setDonors);
  }, []);

  return (
    <div>
      <h2>Donor List</h2>
      <ul>
        {donors.map((donor) => (
          <li key={donor.id}>
            <strong>Name:</strong> {donor.name} <br />
            <strong>Blood Group:</strong> {donor.bloodGroup} <br />
            <strong>Email:</strong> {donor.email} <br />
            <strong>Phone:</strong> {donor.phone} <br />
            <strong>Medical Details:</strong> {donor.medicalDetails}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
