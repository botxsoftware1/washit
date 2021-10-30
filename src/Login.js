import React, { useState, useEffect } from "react";

const Login = () => {
  const [item, setItem] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item & !password) {
      alert("Please Enter Some Value");
    }
  };
  return (
    <>
      <div className="mt-5 d-flex align-center justify-content-center">
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="input-group mb-4">
            <input
              type="text"
              value={item}
              className="form-control input"
              placeholder="Username"
              onChange={(e) => setItem(e.target.value)}
            ></input>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              value={password}
              className="form-control input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <p className="text-center">Forget Password</p>
        </form>
      </div>
    </>
  );
};
export default Login;
