function Glossary() {
  return (
    <div className="page" >
      <h1
        style={{textAlign: "center", marginBottom: "3rem"}}
      >Credit Card Terms Glossary</h1>
      <section>
        <h2 style={{marginBottom: "2rem"}}>📘 Credit Card Terms</h2>
        <dl className="text">
          <dt><strong>APR</strong></dt>
          <dd className="def">Annual Percentage Rate — the yearly interest charged on outstanding balances.</dd>

          <dt><strong>Credit Limit</strong></dt>
          <dd className="def">The maximum amount you can borrow on your credit card.</dd>

          <dt><strong>12-Month Interest Free</strong></dt>
          <dd className="def">A promotion where no interest is charged on purchases for 12 months.</dd>

          <dt><strong>Compound Interest</strong></dt>
          <dd className="def">Interest calculated on the initial principal and also on the accumulated interest.</dd>
        </dl>
      </section>

      <section>
        <h2 style={{marginBottom: "2rem"}}>🎁 Credit Card Benefits</h2>
        <dl  className="text">
          <dt><strong>Standard Towing</strong></dt>
          <dd className="def">Free towing assistance in case your vehicle breaks down — often with distance limits.</dd>

          <dt><strong>VISA Concierge Services</strong></dt>
          <dd className="def">Access to a 24/7 personal assistant for travel bookings, event tickets, reservations, etc.</dd>

          <dt><strong>Travel Insurance</strong></dt>
          <dd className="def">Coverage for trip cancellations, lost luggage, or emergency medical expenses when traveling.</dd>

          <dt><strong>Purchase Protection</strong></dt>
          <dd className="def">Reimbursement or repair for eligible items damaged or stolen after purchase.</dd>
        </dl>
      </section>
    </div>
  );
}

export default Glossary;