import { useState } from 'react';

function BenefitsUpload() {
  const [formData, setFormData] = useState({
    bank: '',
    card: '',
    benefitsLink: '',
  });

  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseData(null);

    try {
      const res = await fetch('http://localhost:3001/api/upload-benefits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseData(data);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Check the backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page" >
      <h1 style={{ 
        width: "100%",
        maxWidth: "800px",
        marginBottom: "3rem",
        fontSize: "2.5rem",
      }}>
        Submit Credit Card for Benefit Analysis
      </h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <label style={{ fontWeight: "bold"}}> Bank Name:</label><br />
          <input
            type="text"
            name="bank"
            style={{maxWidth: "800px"}}
            value={formData.bank}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold"}}> Card Name:</label><br />
          <input
            type="text"
            name="card"
            style={{maxWidth: "800px"}}
            value={formData.card}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold"}}> Link to Benefits / Terms Page:</label><br />
          <input
            type="url"
            name="benefitsLink"
            style={{maxWidth: "800px"}}
            value={formData.benefitsLink}
            onChange={handleChange}
            required
          />
        </div>

        <button style={{marginTop: "1rem"}} type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>

      {responseData && (
        <div className="results">
          <h2>📋 Benefits Found</h2>
          <ul>
            {responseData.benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>🏆 Competitor Cards</h2>
          <ul>
            {responseData.competitors.map((card, i) => (
              <li key={i}>
                <strong>{card.name}</strong> from {card.bank}<br />
                Benefits: {card.benefits.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BenefitsUpload;
