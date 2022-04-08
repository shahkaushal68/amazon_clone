import React, { useState } from "react";
import "../styles/login.css";
import AmazonLogo from "../images/amazon_logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { async } from "@firebase/util";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const login = (e) => {
    e.preventDefault();
    //console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.auth) {
          history("/");
        }
        console.log("login user => ", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const register = async (e) => {
    e.preventDefault();
    //console.log(email, password);
    //register using Firebase

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log("result", result);
      if (result.user) {
        history("/");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <>
      <header>
        <div className="d-flex flex-row justify-content-center">
          <div className="row">
            <div className="col-md">
              <Link to="/">
                <img className="img_1" src={AmazonLogo} alt="Amazon Logo" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="d-flex flex-row justify-content-center">
        <div className="row">
          <div className="col-md">
            <form>
              <div className="sign-in">Sign In</div>
              <div className="form-group">
                <label id="words_1" htmlFor="exampleInputEmail1">
                  Email(phone for mobile accounts)
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                />
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label id="words_2" htmlFor="exampleInputPassword1">
                  Password Forgot your password?
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-warning"
                    id="sign-in"
                    onClick={login}
                  >
                    Sign In
                  </button>
                  <p className="keep-sign-in">
                    <input
                      type="checkbox"
                      className="form-check-input checkbox"
                      id="exampleCheck1"
                    />
                    <span>Keep me signed in.</span>
                  </p>
                </div>
              </div>
              <div className="form-check"></div>
              <button
                type="submit"
                className="btn btn-warning"
                id="grey-button"
                onClick={register}
              >
                Create your Amazon account
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center footer_1">
        <div className="row">
          <div className="col">
            <p className="conditions">
              <a>Conditions of Use </a>
              <a>Privacy Notice</a>
              <a>Help</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
