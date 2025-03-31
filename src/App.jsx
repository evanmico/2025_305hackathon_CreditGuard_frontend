import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import RedFlags from './pages/RedFlags';
import BenefitsUpload from './pages/BenefitsUpload';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/red-flags" element={<RedFlags />} />
        <Route path="/upload" element={<BenefitsUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;