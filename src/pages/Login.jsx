import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth"
import { useAuth } from "../context/AuthContext";
import { Link,Navigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2>Login to Movie App </h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="w-25" onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to= "/signup">Sign Up </Link>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>     
        <Link to ="/forgetpass">forget pass</Link>
        <GoogleLogin/>
      </form>
    </div>
  );
};

export default Login;