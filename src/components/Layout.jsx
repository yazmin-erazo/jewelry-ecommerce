import { Link, Outlet, useLocation } from "react-router-dom";
import HamburgerMenu from "./common/HamburgerMenu ";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-w-screen">
      <div className="fixed top-0 w-full z-10 bg-gray-800 px-5 py-6">
        <header className="container m-auto   w-full flex items-center justify-between shadow-blue-500">
          <div className="flex">
            <Link to="/" className="px-8 items-center flex">
              <img src="src/public/assets/logo-32px.png" alt="" className="object-cover" />
            </Link>

            <nav className="hidden md:flex text-white items-center ml-10">
              <Link
                className={`${
                  location.pathname === "/"
                    ? "bg-blue-700 shadow-inner-white-100"
                    : "text-white"
                } text-sm px-4 py-2 mx-2 bg-slate-700 text-white rounded-md hover:bg-slate-900`}
                to="/"
              >
                Anillos
              </Link>
              <Link className="mx-2">Pulseras</Link>
              <Link className="mx-2">Collares</Link>
              <Link className="mx-2">Aretes</Link>
            </nav>

            
          </div>
          <div className=" hidden sm:flex mx-4">
            <Link
              className={`${
                location.pathname === "/dashboard"
                  ? "bg-blue-700 shadow-inner-white-100"
                  : "text-white"
              } text-sm px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-900`}
              to="/dashboard"
            >
              Dashboard
            </Link>
            <div className="flex w-10 h-10 ml-4 rounded-full bg-pink-500 justify-center items-center uppercase font-medium text-white text-lg">
              YE
            </div>
          </div>
          <HamburgerMenu className="sm:hidden" />
        </header>
      </div>

      <main className="p-8 sm:p-10 mt-28 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
