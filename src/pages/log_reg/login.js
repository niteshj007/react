import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const history = useHistory();
  const username = useRef();
  const password = useRef();
  const pin = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const auth = useContext(AuthContext);

  const submitForm = (e) => {
    e.preventDefault();

    const formData = {
      username: username.current.value,
      password: password.current.value,
      pin: pin.current.value,
      returntoken: true,
    };

    const logerrors = document.getElementById("log-errors");

    setIsLoading(true);
    fetch("http://localhost:8080/webAPI/logreg/login", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json().then((data) => {
            // console.log(data);
            if (data.status == "false") {
              logerrors.innerHTML =
                "<br /><div class='alert alert-danger rounded'>" +
                data.error +
                "</div>";

              setTimeout(() => {
                logerrors.innerHTML = "";
              }, 4000);
            } else {
              auth.login(data.token);
              auth.userId(data.id);
              history.replace("/dashboard");
            }
          });
        } else {
          setIsLoading(false);
          logerrors.innerHTML =
            "<br /><div class='alert alert-danger rounded'>Somthing went wrong please try again later</div>";
          setTimeout(() => {
            logerrors.innerHTML = "";
          }, 4000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        logerrors.innerHTML =
          "<br /><div class='alert alert-danger rounded'>Unable to connect to server</div>";
        setTimeout(() => {
          logerrors.innerHTML = "";
        }, 4000);
      });
  };

  return (
    <main>
      <div className="container">
        <div className="row h-100">
          <div className="col-12 col-md-10 mx-auto my-auto">
            <div className="card auth-card">
              <div className="position-relative image-side ">
                <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>

                <p className="white mb-0">
                  Please use your credentials to login.
                  <br />
                  If you are not a member, please
                  <a href="#" className="white">
                    register.
                  </a>
                </p>
              </div>
              <div className="form-side">
                <span className="logo-single"></span>
                <h6 className="mb-4">Login</h6>
                <form onSubmit={submitForm}>
                  <label className="form-group has-float-label mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      ref={username}
                    />
                    <span>Username</span>
                  </label>

                  <label className="form-group has-float-label mb-4">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      ref={password}
                      placeholder=""
                    />
                    <span>Password</span>
                  </label>

                  <label className="form-group has-float-label mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="pin"
                      ref={pin}
                    />
                    <span>Pin</span>
                  </label>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="#">Forget password?</a>
                    </div>
                    <div>
                      {!isLoading && (
                        <button
                          className="btn btn-primary btn-lg btn-shadow"
                          type="submit"
                        >
                          LOGIN
                        </button>
                      )}
                      {isLoading && (
                        <div className="default-loading">
                          <i className="iconsminds-repeat-2"></i>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
                <div id="log-errors"></div>

                <div>
                  <hr />
                  <div className="register-div">
                    <Link to="/register" className="btn-link">
                      <i className="simple-icon-user-follow"></i> Create Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
