import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import axios from "axios"; // Axios for API call

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after successful login

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post form data to backend API
        await axios.post("http://localhost:5000/api/users/login", formData);

       
        localStorage.setItem("user", JSON.stringify({...formData,password:''})); 
        navigate("/"); // Redirect to home page
      
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            "Unlock the power of simplicity – log in now and take control of
            your shared expenses with ease. Start managing smarter, save more,
            and stress less!"
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email" // Name attribute for input
                placeholder="email"
                className="input input-bordered"
                value={formData.email} // Controlled input
                onChange={handleChange} // Handle input change
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password" // Name attribute for input
                placeholder="password"
                className="input input-bordered"
                value={formData.password} // Controlled input
                onChange={handleChange} // Handle input change
                required
              />
              <label className="label">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {error && <p className="text-red-500">{error}</p>} {/* Display error if exists */}
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                REGISTER HERE
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
