import ComplianceForm from '@/components/ComplianceForm';
import ComplianceList from '@/components/ComplianceList';
import ComplianceSummary from '@/components/ComplianceSummary';
import { ComplianceProvider } from '@/context/ComplianceContext';

export default function Home() {
  return (
    <ComplianceProvider>
      <h1>Morco Compliant Tracker</h1>
      <ComplianceForm />
      <ComplianceSummary />
      <ComplianceList />
    </ComplianceProvider>
  );
}
