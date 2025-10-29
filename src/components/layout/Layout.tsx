import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
