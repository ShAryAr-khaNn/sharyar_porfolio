import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Academia from './Academia/Academia';
import DAE from './ImageShow/DAE';
import Gred from './ImageShow/Gred';
import Building from './ImageShow/Building';
import Projects from './Dailywork/Projects';
import ContactMe from './Contactme/ContactMe';
import Vlog from './vlog/Vlog';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/dae" element={<DAE />} />
          <Route path="/gred" element={<Gred />} />
          <Route path="/building" element={<Building />} />
          <Route path="/vlog1234" element={<Vlog />} />
          {/* Old URLs kept working */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Navigate to="/project" replace />} />
          <Route path="/contact" element={<Navigate to="/contactme" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
