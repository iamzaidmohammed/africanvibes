import { useState } from "react";
import { useAuth } from "../services/authService";
import { useNavigate } from "react-router-dom";

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
      // await signin(email, password);
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default SignIn;
