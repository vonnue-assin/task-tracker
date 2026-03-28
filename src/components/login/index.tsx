import React, { useState } from "react";

import "./styles.css";

type LoginForm = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email === "admin@example.com" && form.password === "1234") {
      localStorage.setItem("token", "dummy-token");
      window.location.href = "/home";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="tracker-titles">Task Tracker</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="login-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="login-input"
          required
        />

        <a href="#" className="login-link">
          Create Account
        </a>

        <button type="submit" className="login-button">
          Login
        </button>

        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
