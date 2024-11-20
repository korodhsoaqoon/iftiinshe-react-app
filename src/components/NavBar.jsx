import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-center">
            <div className="flex items-center flex-1 justify-center md:items-stretch md:justify-start">
              {/* <!-- logo --> */}
              <Link className="flex items-center" to="/">
                <img className="h-10 w-auto" src={logo} alt="" />
                <span className="hidden md:block ml-2 font-bold text-2xl text-white">
                  Iftiinshe
                </span>
              </Link>

              {/* <!-- Menu --> */}
              <div className="ml-2 md:ml-auto">
                <div className="flex space-x-2 items-center">
                  <Link
                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded py-2 px-3"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-white hover:bg-gray-900 hover:text-white rounded py-2 px-3"
                    to="/courses"
                  >
                    Courses
                  </Link>
                  <Link
                    className="text-white hover:bg-gray-900 hover:text-white rounded py-2 px-3"
                    to="/add-course"
                  >
                    Add Course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
