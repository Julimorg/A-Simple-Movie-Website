import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import Test3 from "./pages/Test3";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/ForgetPassword";
import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <div>
	<AuthProvider>
	{/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Home />} />  
        <Route path="/genre" element={<Genre />} />
        <Route path="/forgetspass" element={<PasswordReset />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
	  {/* </Router> */}
	  </AuthProvider>
      <Footer />
    </div>
  );
};

export default App;
