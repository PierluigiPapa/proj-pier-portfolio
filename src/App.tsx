import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ChiSonoPage } from './pages/ChiSonoPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServiziPage } from './pages/ServiziPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/chi-sono' element={<ChiSonoPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/servizi' element={<ServiziPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
