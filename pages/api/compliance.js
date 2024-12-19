import { complianceData } from '../../lib/utils'; // Assuming you have a mock or database

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newCompliance = req.body;
    complianceData.push(newCompliance); // Replace with actual DB logic
    res.status(201).json(newCompliance);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
