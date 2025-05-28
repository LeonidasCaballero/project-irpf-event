import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import IRPFCalculatorPage from './pages/IRPFCalculatorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/section/:id" element={<SectionPage />} />
        <Route path="/calculadora" element={<IRPFCalculatorPage />} />
      </Route>
    </Routes>
  );
}

export default App;