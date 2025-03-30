import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home</Link> | <Link to="/glossary">Glossary</Link>
    // </nav>
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/glossary" style={{ marginRight: '1rem' }}>Glossary</Link>
      <Link to="/red-flags">Things to Watch Out For</Link>
    </nav>
  );
}