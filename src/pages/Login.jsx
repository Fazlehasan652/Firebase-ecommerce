import React from "react";

const Login = () => {
  return (
    <>
      <div className='container'>
        <main className='main'>
          <div className='login-bg'>
            <div className='login'>
              <h2 className='h2-login'>Login</h2>

              <div className='content'>
                <div className='input-content'>
                  <div className='email'>
                    <i className='fa-solid fa-user'></i>
                    <input
                      type='email'
                      className='email-id'
                      placeholder='Email'
                    />
                  </div>
                  <div className='email'>
                    <i className='fa-solid fa-lock'></i>
                    <input
                      type='password'
                      className='email-id'
                      placeholder='password'
                    />
                  </div>
                </div>

                <div className='login-or'>
                  <h3 className='h3-login'>Log In</h3>
                  <h4 className='h4-login'>or</h4>
                </div>
              </div>

              <div className='media'>
                <div className='facebook'>
                  <i className='fa-brands fa-facebook-f'></i>
                  <h4 className='h4-facebook'>Facbook</h4>
                </div>
                <div className='facebook'>
                  <i className='fa-brands fa-google'></i>
                  <h4 className='h4-facebook'>Google</h4>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
