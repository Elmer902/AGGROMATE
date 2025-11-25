import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
export default function Layout() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="flex-1 mt-12 w-full">
        <Outlet />
      </main>
      <Footer className= 'w-full'/>
    </div>
  );
}
