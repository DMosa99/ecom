import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
