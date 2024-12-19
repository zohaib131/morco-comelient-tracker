import React, { createContext, useContext, useState } from 'react';

// Creating context
const ComplianceContext = createContext();

// Provider component
export const ComplianceProvider = ({ children }) => {
  const [complianceData, setComplianceData] = useState([]);

  const addCompliance = (data) => {
    setComplianceData((prev) => [...prev, data]);
  };

  return (
    <ComplianceContext.Provider value={{ complianceData, addCompliance }}>
      {children}
    </ComplianceContext.Provider>
  );
};

// Custom hook to use compliance context
export const useCompliance = () => {
  return useContext(ComplianceContext);
};
