import React, { useState } from 'react';
import Error from './Error';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleCatchError = (error, errorInfo) => {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <Error message="Something went wrong. Please try again later." />;
  }

  return (
    <React.ErrorBoundary FallbackComponent={Error} onError={handleCatchError}>
      {children}
    </React.ErrorBoundary>
  );
};

export default ErrorBoundary;
