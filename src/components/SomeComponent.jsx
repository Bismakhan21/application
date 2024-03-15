import React, { useState, useEffect } from 'react';
import Error from './Error';

const SomeComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchDataFromServer = async () => {
    // Simulate fetching data from an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        // Simulate successful data fetching most of the time
        if (randomValue > 0.2) {
          const mockData = ['Item 1', 'Item 2', 'Item 3'];
          resolve(mockData);
        } else {
          // Simulate an error occasionally
          reject(new Error('Failed to fetch data from server'));
        }
      }, 1000); // Simulate a 1-second delay for fetching
    });
  };

  const fetchData = async () => {
    try {
      const result = await fetchDataFromServer();
      setData(result);
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      {error && <Error message={error} />}
      {data && (
        <div>
          {/* Render data */}
          <h2>Data:</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SomeComponent;
