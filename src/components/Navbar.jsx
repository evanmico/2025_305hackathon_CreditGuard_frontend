import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', fontWeight: "bold" }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/glossary" style={{ marginRight: '1rem' }}>Glossary</Link>
      <Link to="/red-flags" style={{ marginRight: '1rem' }}>Things to Watch Out For</Link>
      <Link to="/upload">Upload Card</Link>
    </nav>
  );
}