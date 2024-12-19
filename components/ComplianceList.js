import { getCompliantItems, getNonCompliantItems } from '../lib/utils';

const ComplianceList = () => {
  const compliantItems = getCompliantItems();
  const nonCompliantItems = getNonCompliantItems();

  return (
    <div>
      <h2>complaint items</h2>
      <ul>
        {compliantItems.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.date}</p>
          </li>
        ))}
      </ul>

      <h2>Non-Complaint items</h2>
      <ul>
        {nonCompliantItems.map((item) => (
          <li key={item.id}>
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
