import React, { useEffect, useState } from "react";
import "./App.scss";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import Vector from "./assets/shapes/Vector.svg";
import EllipseSmall from "./assets/shapes/Ellipse-s.svg";
import EllipseLarge from "./assets/shapes/Ellipse-l.svg";

const App = () => {
  const validUser = {
    email: "frontend@isawesome.com",
    password: "cool",
  };
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user-email")) || ""
  );

  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("user-password")) || ""
  );

  useEffect(() => {
    localStorage.setItem("user-email", JSON.stringify(email));
    localStorage.setItem("user-password", JSON.stringify(password));
  }, [email, password]);

  const Login = (credentials) => {
    console.log(credentials);

    setTimeout(() => {
      if (
        credentials.email === validUser.email &&
        credentials.password === validUser.password
      ) {
        setIsLoggedIn(!isLoggedIn);
        setEmail(credentials.email);
        setPassword(credentials.password);
      } else if (!credentials.email && !credentials.password) {
        setError("Fields cannot be empty");
      } else {
        setError("Details do not match");
      }
    }, 1000);
  };

  return (
    <div className="wrapper">
      {email !== "" ? (
        <div className="wrapper__login-message">
          You have successfully logged in!
        </div>
      ) : (
        <>
          <LoginHeader />
          <LoginForm Login={Login} error={error} />
        </>
      )}
      <img alt="" src={Vector} className="vector" />
      <img alt="" src={EllipseSmall} className="ellipse-s" />
      <img alt="" src={EllipseLarge} className="ellipse-l" />
    </div>
  );
}

export default App;
