import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
const Signup = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setshowheaderfooter(false);
  });
  return (
    <>
      <section>
        <div className="signin-container">
          <div className="signin-content">
            <div className="signin-logo"></div>
            <div className="signin-form">
              <h3>Create Account</h3>
              <div className="signup-details">
              <input
                type="text"
                placeholder="Full Name"
               className="fullname"
              />
              <input
                type="text"
                placeholder="Contact No"
               className="contact"
              />
              </div>
              <div className="signup-email-input"> 

              <input
                type="email"
                placeholder="Email"
               className="em-i"
              />
              </div>
              <div className="signup-password-input">
               <input
                type="password"
                placeholder="password"
               className="pas-i"
              />
              </div>
              <div className="forgot-pas">
                <p>Forgot password?</p>
              </div>
              <div className="sign-button">
                <button className="signin-b">Sign In</button>
              </div>
              <div className="sign-cancel">
                <Link to='/'>
                <button className="signin-cancel">Cancel</button>
                </Link>
              </div>
              <Link to='/SignIn'>
              <div className="not">
                <p>Already Registered?</p>
                <span>Sign In</span>
              </div>
              </Link>
              <div className="other">
                <h3>Or Continue with other Social Account</h3>
              </div>
              <div className="google-signup"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
