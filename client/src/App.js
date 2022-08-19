import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SigninAndSignupPage from "./pages/SigninAndSignupPage";
import MagicMarkPage from "./pages/MagicMarkPage";
import LightWorkerPage from "./pages/LightWorkerPage";
import CashMoneyPage from "./pages/CashMoneyPage";
import SorcerersSpherePage from "./pages/SorcerersSpherePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin-signup" element={<SigninAndSignupPage />} />
        <Route path="/magic-mark" element={<MagicMarkPage />} />
        <Route path="/light-worker" element={<LightWorkerPage />} />
        <Route path="/cash-money" element={<CashMoneyPage />} />
        <Route path="/sorcerers-sphere" element={<SorcerersSpherePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
