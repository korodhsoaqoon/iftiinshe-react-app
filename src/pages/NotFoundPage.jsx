import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center h-96">
      <FaExclamationTriangle className="text-6xl text-yellow-400" />
      <h1 className="text-6xl font-bold mb-4 ">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link to="/" className="text-white bg-indigo-700 px-3 py-2 mt-4 rounded">
        Go Back{" "}
      </Link>
    </section>
  );
};

export default NotFoundPage;
