"use client";
import { useState } from "react";
import Style from "./SignUp.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useRouter } from "next/navigation";
import api from "@/components/API/api";
import Link from "next/link";
let Message;
export default function () {

  

  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await api.post("/Auth/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
      setLoading(false);
      if (response.data.success === false) {
        setError(true);
        return;
      }
      router.push("/Login");
    } catch (error) {
      Message = error.response.data;
      console.log(error.response.data);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <div className={Style.contactForm}>
        <form onSubmit={handleSubmit} className={Style.form}>
          <h2 className={Style.h2}>Sign Up</h2>
          <div className={Style.formGroup}>
            <label htmlFor="firstName" className={Style.label}>
              First Name:
            </label>
            <input
              placeholder="FirstName"
              type="text"
              className={Style.formControl}
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.formGroup}>
            <label htmlFor="lastName" className={Style.label}>
              Last Name:
            </label>
            <input
              placeholder="LastName"
              type="text"
              className={Style.formControl}
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.formGroup}>
            <label htmlFor="username" className={Style.label}>
              Username:
            </label>
            <input
              placeholder="Username"
              type="text"
              className={Style.formControl}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.formGroup}>
            <label htmlFor="email" className={Style.label}>
              Email:
            </label>
            <input
              placeholder="Email"
              type="email"
              className={Style.formControl}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.formGroup}>
            <label htmlFor="password" className={Style.label}>
              Password:
            </label>
            <input
              placeholder="Password"
              type="password"
              className={Style.formControl}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Style.formGroup}>
            <button
              type="submit"
              className={Style.btn}
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>

          <div style={{ display: "flex" }}>
            <p className={Style.login}>Already have an account?</p>
            <Link href="/Login" passHref className={Style.signSpan}>
              <span>Sign in</span>
            </Link>
          </div>
        </form>
        <div className="loggo">
          <Image src={Logo} alt="Logo" width={530} height={530} />
        </div>
      </div>
      {error && <p className={Style.error}>{Message}</p>}
    </>
  );
}
