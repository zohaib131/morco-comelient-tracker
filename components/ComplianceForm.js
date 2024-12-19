import { useState } from 'react';
import { useCompliance } from '../context/ComplianceContext';
import { useForm } from 'react-hook-form';

const ComplianceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addCompliance } = useCompliance();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // Here you would submit the data to your API
    // e.g., await axios.post('/api/compliance', data);
    
    // Adding compliance data to global context (mock)
    addCompliance(data);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Compliance Name</label>
        <input
          type="text"
          {...register('name', { required: 'Compliance name is required' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Date</label>
        <input
          type="date"
          {...register('date', { required: 'Date is required' })}
        />
        {errors.date && <p>{errors.date.message}</p>}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ComplianceForm;
