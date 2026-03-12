import "./App.css";
import {
  Navigate,
  useLocation,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ContactConfirmation from "../src/components/Contact/ContactConfirmation ";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/contact-confirmation"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      {showHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact-confirmation"
            element={<ContactConfirmation />}
          />
        </Routes>
      </main>
      {showHeader && <Footer />}
    </>
  );
}

export default App;
