import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const { user, logout } = useAuth();

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.trim(); 
    setSearchTerm(value);
    const newParams = new URLSearchParams(searchParams);
    value ? newParams.set("q", value) : newParams.delete("q");
    setSearchParams(newParams);
  };

  // Handle clearing the search input
  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchParams(new URLSearchParams()); // Reset URL params
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-3 container-fluid d-flex align-items-center justify-content-between">
      <h1 className="navbar-brand mb-0">
        <Link to="/" className="text-decoration-none text-light">MovieApp</Link>
      </h1>

      {/* Search Bar */}
      <div className="d-flex">
        <input type="text" className="form-control me-2" style={{ maxWidth: "400px" }}
          placeholder="Search movies..."
          value={searchTerm} onChange={handleSearchChange}
        />
        {searchTerm && (
          <button className="btn btn-outline-secondary" onClick={handleClearSearch}>
            Clear
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Movie App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">Welcome, {user.displayName || user.email}!</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-primary" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
        {/* <Link className="btn btn-outline-light me-2" to="/genre">Genres</Link>
        <Link className="btn btn-outline-light" to="/test3">Test </Link>
        <Link className="btn btn-outline-light" to="/signup">Login </Link> */}

      </div>
    </nav>
  );
};

export default Navbar;
