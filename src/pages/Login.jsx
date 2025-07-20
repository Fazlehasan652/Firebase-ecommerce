import React, { useState } from "react";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [wrongEmail, setWrongEmail] = useState("");
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const handleChange = async (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(user)
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const users = await getDocs(usersCollectionRef);
    const usersEmail = users.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const userEmail = usersEmail.map((d) => d.email);
    // console.log(user.email);

    try {
      let userdata = userEmail.some((data) => data === user.email);
      // console.log(userdata)

      if (userdata) {
        const res = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        // console.log(res.user);
        // console.log(auth.currentUser.emailVerified)
        if (res.user) {
          setUser({
            email: "",
            password: "",
          });
          setIsLoading(false);
          setErrorMessage("");
          // console.log(res.user.email);

          navigate("/home");
        }
      } else {
        setWrongEmail(user.email);
        setTimeout(() => {
          navigate("/sign-up");
        }, 1000);
      }
    } catch (error) {
      setIsLoading(false);

      setErrorMessage(error.message);
      // setUser({
      //   email: "",
      //   password: "",
      // });
    }
  };
  return (
    <>
      <div className="container-login">
        <main className="main">
          <div className="login-bg">
            <form onSubmit={submitHandler} className="login">
              <h2 className="h2-login">Login</h2>

              <div className="content">
                <div className="input-content">
                  <div className="email">
                    <i className="fa-solid fa-user"></i>
                    <input
                      className="email-id"
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={user.email}
                      placeholder="Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="email">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      className="email-id"
                      id="password"
                      type="password"
                      name="password"
                      required
                      value={user.password}
                      placeholder="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="login-or actions">
                  {!isLoading && (
                    <button type="submit" className="h3-login butt">
                      Log In
                    </button>
                  )}
                  {isLoading && <p className="h3-login">Sending request...</p>}
                  {wrongEmail && (
                    <h3 style={{ color: "red" }}>
                      Your Email {wrongEmail} is not valid
                    </h3>
                  )}
                  {errorMessage && (
                    <h3 style={{ color: "red" }}>{errorMessage}</h3>
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-[-10px]">
                <div className="facebook flex flex-row">
                  <i className="fa-brands fa-google text-amber-50"></i>
                  <h4 className="text-amber-50">Google</h4>
                </div>
                <div className="facebook">
                  <i className="fa-brands fa-facebook-f text-blue-50"></i>
                  <h4 className="text-amber-50">Facebook</h4>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
