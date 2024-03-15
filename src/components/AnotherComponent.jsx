// AnotherComponent.js
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SomeComponent from './components/SomeComponent';

const AnotherComponent = () => {
  return (
    <ErrorBoundary>
      <SomeComponent />
      {/* Add other components */}
    </ErrorBoundary>
  );
};

export default AnotherComponent;
