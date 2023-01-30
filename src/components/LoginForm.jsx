import React, { useState } from "react";
import Error from "../assets/icons/error-905.svg";

const LoginForm = ({ Login, error }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(credentials);
  };

  return (
    <form className="login-form">
      <input
        className="login-form__email"
        type="email"
        placeholder="Username or E-mail"
        value={credentials.email}
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
        required
      />

      <input
        className="login-form__password"
        type="password"
        placeholder="Password"
        value={credentials.password}
        name="password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {error !== "" ? (
        <div className="login-form__error">
          <img alt="error" src={Error} className="login-form__error-img" />
          {error}
        </div>
      ) : (
        ""
      )}
      <input
        type="submit"
        value="Login"
        className="login-form__login-btn"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default LoginForm;
