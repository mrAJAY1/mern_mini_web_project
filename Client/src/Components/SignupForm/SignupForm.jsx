import React, { useEffect, useState } from "react";
import "./SignupForm.css";
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/user_signup", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(res)
  };
  return (
    <div className="signupForm">
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 p-5  signup-form-section">
            <form onSubmit={handleSignupSubmit} className="w-100">
              <div className="form-group mb-3 w-100">
                <label className="error-Label d-none">Error Occured</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="d-block  w-100"
                  placeholder="John Doe"
                />
                <small className="text-muted">Enter your Name here...</small>
              </div>
              <div className="form-group mb-3 w-100">
                <label className="error-Label d-none">Error Occured</label>
                <input
                  value={email}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="d-block  w-100"
                  placeholder="example@gmail.com"
                />
                <small className="text-muted">Enter your email here...</small>
              </div>

              <div className="form-group w-100">
                <label className="error-Label d-none">Error Occured</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="d-block  w-100"
                />
                <small className="text-muted">
                  Enter your Password here...
                </small>
              </div>
              <div className="form-group" style={{ marginTop: "5%" }}>
                <button className="btn signup-submit-btn"> submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
