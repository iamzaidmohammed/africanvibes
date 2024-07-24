import { useEffect, useState } from "react";
import { useAuth } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Img from "../assets/signin-img.jpg";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { signup, signin } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signup(
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    );
    setMessage(result.message);
    if (result.success) {
      await signin(email, password);
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
    <>
      <Helmet>
        <title>Create an account | African Vibes</title>
      </Helmet>
      <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section>
          <div className="md:flex md:items-center md:gap-10">
            <div className="bg-tetiary w-full lg:basis-2/3">
              <h2 className="text-center text-xl pt-3">Create an account</h2>
              {message && (
                <p className="text-center text-lg text-red-500 pt-3">
                  {message}
                </p>
              )}

              <form
                method="POST"
                onSubmit={handleSubmit}
                className="px-4 py-2 md:flex md:flex-wrap md:gap-5"
              >
                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
                  <label htmlFor="firstName" className="text-lg">
                    First Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="text-center bg-transparent border-2 py-2 outline-none border-primary"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
                  <label htmlFor="lastName" className="text-lg">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="text-center bg-transparent border-2 py-2 outline-none border-primary"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
                  <label htmlFor="username" className="text-lg">
                    Username:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="text-center bg-transparent border-2 py-2 outline-none border-primary"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
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

                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
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

                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
                  <label htmlFor="confirmPassword" className="text-lg">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password again"
                    className="text-center bg-transparent border-2 border-primary py-2 outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button
                  className="bg-primary w-full py-2 text-white mt-5 mb-2 rounded-md"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-center">
                {`Already have an account?`}{" "}
                <Link to={"/users/signup"} className="underline">
                  Sign in
                </Link>{" "}
              </p>

              <div className="flex flex-col items-center">
                <h3 className="mb-5">OR</h3>

                <div className="md:flex md:gap-5">
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

            <div className="hidden lg:block lg:basis-1/3">
              <img
                src={Img}
                className="lg:w-64"
                alt="Image of a woman holding a smart phone"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
