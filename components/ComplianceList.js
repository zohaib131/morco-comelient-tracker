import { useCompliance } from '../context/ComplianceContext';

const ComplianceList = () => {
  const { complianceData } = useCompliance();

  return (
    <div>
      <h2>compliance List</h2>
      <ul>
        {complianceData.map((item, index) => (
          <li key={index}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplianceList;
