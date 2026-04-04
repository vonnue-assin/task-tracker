import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { LoginForm } from "../../types";

import "./styles.css";

type User = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isStrongPassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm({
      ...signupForm,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (user) => user.email === form.email && user.password === form.password,
    );

    if (foundUser) {
      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      toast.success("Login successful!");

      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handleRegister = () => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    if (!isValidEmail(signupForm.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!isStrongPassword(signupForm.password)) {
      toast.error("Password must be 6+ chars, include 1 uppercase & 1 number");
      return;
    }

    const userExists = users.some((user) => user.email === signupForm.email);

    if (userExists) {
      toast.error("User already exists!");
      return;
    }

    users.push(signupForm);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("currentUser", JSON.stringify(signupForm));

    toast.success("Account created & logged in!");

    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

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

        <button
          type="button"
          className="button-link"
          onClick={() => setShowModal(true)}
        >
          Create Account
        </button>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {showModal && (
        <div className="modal-overlays" onClick={() => setShowModal(false)}>
          <div className="modals" onClick={(e) => e.stopPropagation()}>
            <h3 className="tracker-titles">Create Account</h3>

            <input
              type="text"
              placeholder="name"
              className="login-input"
              onChange={handleSignupChange}
            />
            <input
              type="email"
              placeholder="email"
              className="login-input"
              onChange={handleSignupChange}
            />
            <input
              type="password"
              placeholder="password"
              className="login-input"
              onChange={handleSignupChange}
            />

            <button className="login-button" onClick={handleRegister}>
              Register
            </button>

            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
