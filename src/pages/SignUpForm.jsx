import React from "react";

const SignUpForm = () => {
  return (
    <>
      <div className='container-signup'>
        <main className='main-signup'>
          <div className='signup-b'>
            <div className='login-signup'>
              <h2 className='text-3xl text-white'>Registration Form</h2>
              <div className='content'>
                {/* Name  */}
                <div className='input-content'>
                  <div className='email'>
                    <i className='fa-solid fa-user'></i>
                    <input
                      type='text'
                      className='email-id'
                      placeholder='Name'
                    />
                  </div>
                  {/* Email  */}
                  <div className='email'>
                    <i class='fa-solid fa-envelope'></i>

                    <input
                      type='email'
                      className='email-id'
                      placeholder='Email'
                    />
                  </div>
                  {/* Phone  */}
                  <div className='email'>
                    <i class='fa-solid fa-phone'></i>

                    <input
                      type='tel'
                      className='email-id'
                      placeholder='Phone'
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
              </div>

              <div className='flex flex-col items-center gap-y-1'>
                <div className='login-or'>
                  <h3 className='h3-login'>CREATE ACCOUNT</h3>
                </div>
                <h4 className='text-xl text-white'>or</h4>
                <div className='flex flex-row gap-3'>
                  <div className='facebook flex flex-row'>
                    <i className='fa-brands fa-google text-red-600'></i>
                    <h4 className='text-red-600'>Google</h4>
                  </div>
                  <div className='facebook'>
                    <i className='fa-brands fa-facebook-f text-blue-600'></i>
                    <h4 className='text-blue-600'>Facebook</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignUpForm;
