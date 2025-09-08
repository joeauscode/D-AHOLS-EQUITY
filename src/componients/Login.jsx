import React, { useState, useEffect } from "react";
import { Loginpage } from "./styles";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
      import AOS from "aos";
      import "aos/dist/aos.css";

const Login = () => {
  const [loginpage, setLoginpage] = useState(false);
  const [openloader, setopenloader] = useState(false);

  const [phone, setPhone] = useState("");

  const Openlogin = () => {
    setopenloader(true);
    setTimeout(() => {
      setLoginpage((prev) => !prev);
      setopenloader(false);
    }, 1000);
  };

  const reload = () => {
    window.location.reload();
  };


  
            useEffect(() => {
          AOS.init({
            duration: 2000,
            once: false,   
          });
          AOS.refresh();
        }, []);
      

  return (
    <Loginpage>
      {/* blur screan */}
      {loginpage && (
        <div className="blur" onClick={() => setLoginpage(false)}></div>
      )}

      {openloader && (
        <div className="loading">
          <button className="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      )}

      <div className="main">
        <form action="" data-aos="zoom-in">
          <div className="Create">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <h1>Create your account</h1>
              <span className="mylogin" onClick={Openlogin}>
                Login
              </span>
            </div>
            <p>Registration is easy.</p>
          </div>

          <div className="sighupform">
            <div className="inputs">
              <div>
                <label htmlFor="Email">Email address *</label>
                <input type="email" name="" id="" />
              </div>

              <div>
                <label htmlFor="Phone">Phone Number *</label>
                <PhoneInput
                  country={"ng"}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputStyle={{
                    width: "100%",
                    padding: "20px 50px",
                    borderRadius: "10px",
                    outline: "none",
                    border: "2px solid lightgray",
                  }}
                />
              </div>
            </div>

            <div className="inputs">
              <div>
                <label htmlFor="">Full-name *</label>
                <input type="text" name="" id="" />
              </div>

              <div>
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div className="inputs">
              <div>
                <label htmlFor="">Password*</label>
                <input type="password" name="" id="" />
              </div>
              <div>
                <label htmlFor="">Confirm Password*</label>
                <input type="password" name="" id="" />
              </div>
            </div>

            <div className="button">
              <p>
                By clicking Register, you agree to D'AHOLS EQUITY Terms of Use
                and Privacy Policy.
              </p>
              <div>
                <button className="btn">Register</button>
              </div>
              <p>
                D'AHOLS EQUITY may send you communications; you may change your
                preferences in your account settings. We'll never post without
                your permission.
              </p>
            </div>
          </div>
        </form>
      </div>

      {loginpage && (
        <div className="loginform">
          <form
            className="form"
            action=""
            style={{ width: "30%", backgroundColor: "white" }}
          >
            <div className="Loginpop">
              <span>Sign-in</span>
              <span className="mylogin" onClick={reload}>
                Register
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <label htmlFor="">Email/Username</label>
                <input type="email" name="" id="" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="Password" name="" id="" />
              </div>
              <Link>Forgot your password?</Link>
              <div>
                <button className="btn">Login</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Loginpage>
  );
};

export default Login;










// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       email,
//       phone,
//       fullname,
//       username,
//       password,
//       confirm_password: confirmPassword,
//     };

//     const response = await fetch("http://127.0.0.1:8000/api/register/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert("User registered successfully!");
//     } else {
//       alert("Error registering user.");
//     }
//   };