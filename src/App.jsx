import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/dashboard/LandingPage";
import OurRoutes from "./commons/OurRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ OurRoutes.landing } element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
