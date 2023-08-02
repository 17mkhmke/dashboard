import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.scss";
import logo from "./logo.png";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    const isLoginValid =
      username === "mkhuseli@databalk.nu" && password === "123456789";

    if (isLoginValid) {
      // Redirect to the main app
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      // Set the error message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <img src="https://i.postimg.cc/rFx9P5HD/logoh.jpg" alt="Logo" className="logo" />
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            type="text"
            placeholder="youremail@gmail.com"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className="orange-button" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;