"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/components/API/api";
import "./loginStyles.css";
import Link from "next/link";
import Successful from "@/components/Successful/Successful";

let Message;
export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await api.post("/Auth/Login", {
        emailOrUserName: formData.emailOrUserName,
        password: formData.password,
      });

      console.log(response.data);
      setLoading(false);
      if (response.data.success === false) {
        setError(true);
        return;
      }

      sessionStorage.setItem("Token", response.data.Token);
      // sessionStorage.getItem("Token");
      sessionStorage.setItem("Username", response.data.Username);
      sessionStorage.setItem("Email", response.data.Email);

      setDone(true);
      setTimeout(() => {
        setDone(false);
        response.data.Roles[0]==="Admin"?router.push("/AdminDashboard"):response.data.Roles[0]==="User"?router.push("/GoToApp"):router.push("/CoachDashboard");
      }, 2500);
    } catch (error) {
      Message = error.response.data;
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 body">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-4 form p-2"
      >
        <h2 className="text-center display-4 my-2">Log in</h2>

        <input
          type="text"
          placeholder="Username Or Email"
          id="emailOrUserName"
          className="form-control"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="form-control"
          required
          onChange={handleChange}
        />
        <button disabled={loading} className="btn btn-primary mt-3">
          {loading ? "Loading..." : "Log in"}
        </button>
        <div className="d-flex gap-2 mt-3"></div>
        {error && <p className="text-danger mt-3">{Message}</p>}
        <div style={{ position:"relative" }}>
          <Link href="/Forget" passHref className="forget">
            Forget password?
          </Link>
        </div>
      </form>
      {done && <Successful />}
    </div>
  );
}
