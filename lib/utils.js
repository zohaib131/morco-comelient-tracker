// Mock compliance data array
export const complianceData = [
    { id: 1, name: "Compliance 1", description: "Description of compliance 1", date: "2024-01-01", isCompliant: true },
    { id: 2, name: "Compliance 2", description: "Description of compliance 2", date: "2024-02-01", isCompliant: false },
    { id: 3, name: "Compliance 3", description: "Description of compliance 3", date: "2024-03-01", isCompliant: true },
  ];
  
  // Helper function to add a new compliance item
  export const addComplianceItem = (item) => {
    complianceData.push({ ...item, id: complianceData.length + 1 });
  };
  
  // Function to get compliant items
  export const getCompliantItems = () => {
    return complianceData.filter(item => item.isCompliant);
  };
  
  // Function to get non-compliant items
  export const getNonCompliantItems = () => {
    return complianceData.filter(item => !item.isCompliant);
  };
  