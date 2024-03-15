import React from 'react';
import { useSelector } from 'react-redux';

const ProcurementDetails = () => {
  // Retrieve donor information from the Redux store
  const donors = useSelector((state) => state.donor.donors);

  return (
    <div>
      <h2>Procurement Details</h2>
      <ul>
        {/* Map through the list of donors and display their information */}
        {donors.map((donor) => (
          <li key={donor.id}>
            <div>
              <strong>Name:</strong> {donor.name}
            </div>
            <div>
              <strong>Blood Group:</strong> {donor.bloodGroup}
            </div>
            <div>
              <strong>Email:</strong> {donor.email}
            </div>
            <div>
              <strong>Phone:</strong> {donor.phone}
            </div>
            <div>
              <strong>Medical Details:</strong> {donor.medicalDetails}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcurementDetails;
