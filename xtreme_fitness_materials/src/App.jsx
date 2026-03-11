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
    </>
  );
}

export default App;
