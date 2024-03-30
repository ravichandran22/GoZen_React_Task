import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    console.error('Error caught by error boundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
};

export default ErrorBoundary;
