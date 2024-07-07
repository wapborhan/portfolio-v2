import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-fluid bg-black">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="content text-center">
              <h2>404</h2>
              <h4 className="mt-5">Page Not Found</h4>
              <Link to="/" className="btn btn-danger mt-5">
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
