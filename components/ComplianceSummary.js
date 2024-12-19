import { useCompliance } from '../context/ComplianceContext';

const ComplianceSummary = () => {
  const { complianceData } = useCompliance();

  const compliantItemsCount = complianceData.filter(item => item.isCompliant).length;

  return (
    <div>
      <h2>Compliance Summary</h2>
      <h4>list item{complianceData.length}</h4>
    </div>
  );
};

export default ComplianceSummary;
