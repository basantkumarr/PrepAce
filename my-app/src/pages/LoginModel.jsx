import  { useState } from "react";
import PropTypes from "prop-types";
import img from "../assets/login.jpg";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = () => {
  console.log("submitting");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ maxWidth: "800px", width: "90%", overflow: "hidden" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="hidden md:block">
            <img
              src={img}
              alt="Login"
              className="h-72 w-72 object-cover rounded-sm shadow-md"
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form className="space-y-4">
              {isSignUp && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-sm text-gray-700">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={toggleSignUp}
                      className="underline text-blue-600 cursor-pointer"
                    >
                      Sign In
                    </span>
                  </>
                ) : (
                  <>
                    Not registered yet?{" "}
                    <span
                      onClick={toggleSignUp}
                      className="underline text-blue-600 cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSubmit}
                >  
                 Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

 LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
