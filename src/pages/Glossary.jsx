function Glossary() {
  return (
    <div className="page glossary-page glossary-container" style={{ padding: "2rem", lineHeight: "1.6" }}>
      <h1>Credit Card Terms Glossary</h1>

      <section>
        <h2>📘 Credit Card Terms</h2>
        <dl>
          <dt><strong>APR</strong></dt>
          <dd>Annual Percentage Rate — the yearly interest charged on outstanding balances.</dd>

          <dt><strong>Credit Limit</strong></dt>
          <dd>The maximum amount you can borrow on your credit card.</dd>

          <dt><strong>12-Month Interest Free</strong></dt>
          <dd>A promotion where no interest is charged on purchases for 12 months.</dd>

          <dt><strong>Compound Interest</strong></dt>
          <dd>Interest calculated on the initial principal and also on the accumulated interest.</dd>
        </dl>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>🎁 Credit Card Benefits</h2>
        <dl>
          <dt><strong>Standard Towing</strong></dt>
          <dd>Free towing assistance in case your vehicle breaks down — often with distance limits.</dd>

          <dt><strong>VISA Concierge Services</strong></dt>
          <dd>Access to a 24/7 personal assistant for travel bookings, event tickets, reservations, etc.</dd>

          <dt><strong>Travel Insurance</strong></dt>
          <dd>Coverage for trip cancellations, lost luggage, or emergency medical expenses when traveling.</dd>

          <dt><strong>Purchase Protection</strong></dt>
          <dd>Reimbursement or repair for eligible items damaged or stolen after purchase.</dd>
        </dl>
      </section>
    </div>
  );
}

export default Glossary;