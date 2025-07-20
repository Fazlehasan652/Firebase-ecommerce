import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target.name)
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        name: user.name,
        email: user.email,
        tel: Number(user.tel),
        role: "user",
      });

      setUser({
        name: "",
        email: "",
        tel: "",
        password: "",
      });
      setIsLoading(false);
      setErrorMessage("");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="container-signup">
        <main className="main-signup">
          <div className="signup-bg">
            <form onSubmit={submitHandler} className="login-signup">
              <h2 className="text-3xl text-white">Registration Form</h2>
              <div className="content">
                {/* Name  */}
                <div className="input-content">
                  <div className="email">
                    <i className="fa-solid fa-user"></i>
                    <input
                      className="email-id"
                      type="text"
                      name="name"
                      required
                      value={user.name}
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </div>
                  {/* Email  */}
                  <div className="email">
                    <i className="fa-solid fa-envelope"></i>

                    <input
                      type="email"
                      name="email"
                      required
                      value={user.email}
                      className="email-id"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  {/* Phone  */}
                  <div className="email">
                    <i className="fa-solid fa-phone"></i>

                    <input
                      className="email-id"
                      type="tel"
                      name="tel"
                      required
                      value={user.tel}
                      placeholder="Phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="email">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      className="email-id"
                      type="password"
                      name="password"
                      required
                      value={user.password}
                      placeholder="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-1">
                <div className="login-or actions ">
                  {!isLoading && (
                    <button type="submit" className="h3-login butt">
                      CREATE ACCOUNT
                    </button>
                  )}
                  {isLoading && (
                    <p className="h3-login">Creating New User...</p>
                  )}
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                </div>
                <h4 className="text-xl text-white">or</h4>
                <div className="flex flex-row gap-3">
                  <div className="facebook flex flex-row">
                    <i className="fa-brands fa-google text-red-600"></i>
                    <h4 className="text-red-600">Google</h4>
                  </div>
                  <div className="facebook">
                    <i className="fa-brands fa-facebook-f text-blue-600"></i>
                    <h4 className="text-blue-600">Facebook</h4>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignUpForm;
