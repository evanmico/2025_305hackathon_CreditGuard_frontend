import { useState } from 'react';

function BenefitsUpload() {
  const [formData, setFormData] = useState({
    bankName: '',
    cardName: '',
    link: '',
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
      const res = await fetch('http://creditguard-backend-avhvfvaddnhyd0bj.eastus2-01.azurewebsites.net/test', {
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
            name="bankName"
            style={{maxWidth: "800px"}}
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold"}}> Card Name:</label><br />
          <input
            type="text"
            name="cardName"
            style={{maxWidth: "800px"}}
            value={formData.cardName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold"}}> Link to Benefits / Terms Page:</label><br />
          <input
            type="url"
            name="link"
            style={{maxWidth: "800px"}}
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>

        <button style={{marginTop: "1rem"}} type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>

      {responseData && (
        <div>
          <section>
          <h2>📋 Benefits Found</h2>
          <ul>
            {responseData.benefits.map((item, i) => (
              <li key={i}>
                <strong>{item.benefitName}</strong>
                <p style={{ marginTop: "0.25rem", lineHeight: 1.4 }}>
                  {item.benefitDescription}
                </p>
              </li>
            ))}
          </ul>
          </section>
          <section>
          <h2>🏆 Competitor Cards</h2>
          <ul>
            {responseData.competitorCards.map((card, i) => (
              <li key={i} style={{ marginBottom: '1rem' }}>
                <strong>The <em>{card.cardName}</em> Card Offered by <em>{card.bankName}</em></strong>
                <ul style={{ marginLeft: "1rem" }}>
                  {card.benefits.map((benefit, j) => (
                    <li key={j}>{benefit.benefitName}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          </section>
        </div>
      )}
    </div>
  );
}

export default BenefitsUpload;
