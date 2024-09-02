"use client"
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode; // Include children prop explicitly
  // Define any other props specific to ErrorBoundary
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    // Example: Simulate an error
    if (Math.random() < 0.5) {
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return <p>Something went wrong. Please refresh the page.</p>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
