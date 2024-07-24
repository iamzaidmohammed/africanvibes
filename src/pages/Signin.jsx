import { useEffect, useState } from "react";
import { useAuth } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Img from "../assets/signin-img.jpg";
import Footer from "../components/Footer";

const SignIn = () => {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signin(email, password);
    setMessage(result.message);
    if (result.success) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }
  }, [message]);

  return (
    <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
      <section>
        <div className="md:flex md:items-center md:gap-10">
          <div className="bg-tetiary md:basis-2/3 lg:basis-3/4">
            <h2 className="text-center text-xl pt-3">Log into your account</h2>
            {message && (
              <p className="text-center text-lg text-red-500 pt-3">{message}</p>
            )}

            <form method="POST" onSubmit={handleSubmit} className="px-4 py-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-lg">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-center bg-transparent border-2 py-2 outline-none border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1 mt-4">
                <label htmlFor="email" className="text-lg">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="text-center bg-transparent border-2 border-primary py-2 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-right mt-1 underline">
                <Link to={"/users/forgot-password"}>Forgot Password?</Link>
              </div>

              <button
                className="bg-primary w-full py-2 text-white mt-5 mb-2 rounded-md"
                type="submit"
              >
                Sign In
              </button>

              <p className="text-center">
                {`Don't have an account?`}{" "}
                <Link to={"/users/signup"} className="underline">
                  Sign up
                </Link>{" "}
              </p>
            </form>

            <div className="flex flex-col items-center">
              <h3 className="mb-5">OR</h3>

              <div className="lg:flex lg:gap-5">
                <button
                  className="bg-white w-60 px-4 py-2 text-black mb-4 rounded-md flex items-center gap-3"
                  type="submit"
                >
                  <FcGoogle /> Continue with Google
                </button>
                <button
                  className="bg-white w-60 px-4 py-2 text-black mb-4 rounded-md flex items-center gap-3"
                  type="submit"
                >
                  <FaApple /> Continue with Apple
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:basis-1/3 lg:basis-1/4">
            <img
              src={Img}
              className="md:w-60 lg:w-52"
              alt="Image of a woman holding a smart phone"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
