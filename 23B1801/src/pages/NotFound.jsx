import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-5">Page Not Found</p>

      <Link
        to="/"
        className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;