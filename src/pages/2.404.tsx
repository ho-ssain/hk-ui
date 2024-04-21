import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="px-4 py-10 text-center sm-px-6 lg-px-8">
      <h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
        404
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">Page not found</p>
      <Link to="/">
        👉
        <span className="hover:underline text-blue-800 dark:text-blue-400 font-medium hover:font-bold">
          Home
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
