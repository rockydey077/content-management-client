import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Main;
