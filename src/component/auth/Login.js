import { ArrowForwardIos, SettingsSystemDaydreamOutlined } from '@material-ui/icons';
import React from 'react';
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

function Login(){
    return (
      <div className="login">
        <div className="login_container">
          <div className="login_logo">
            <img
              src="https://th.bing.com/th/id/OIP.-MxYaS4J1SySsb0msl-oMgHaDF?w=350&h=145&c=7&o=5&dpr=1.25&pid=1.7"
              alt=""
            />
          </div>

          <div className="login_desc">
            <p>Place to share your knowledge with your fellows </p>
            <p style={{ color: "royalblue", fontSize: "25px" }}>Made by BEC</p>
            <h3>Live to Learn</h3>

            <div className="login_auth">
              <div className="login_authOptions">
                <div className="login_authOption">
                  <img
                    className="login__googleAuth"
                    src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                    alt=""
                  />
                  <p /*onClick={signIn}*/>Continue With Google</p>
                </div>

                <div className="login_authOption">
                  <img
                    className="login__googleAuth"
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                    alt=""
                  />
                  <span>Continue With Facebook</span>
                </div>

                <div className="login_authDesc">
                  <p>
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Sign up with Email
                    </span>
                    . By continuing you indicate that you have read and agree to
                    iKnowIt's
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Terms of Servies{" "}
                    </span>
                    and{" "}
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="login_emailPass">
                <div className="login_label">
                  <h4>Login</h4>
                </div>
                <div className="login_inputFields">
                  <div className="login_inputField">
                    <input /*value={email} onChange={(e)=>setEmail(e.target.value)}*/
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  <div className="login_inputField">
                    <input /*value={password} onChange={(e) =>setPassword(e.target.value)}*/
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="login_forgButton">
                  <small>Forgot Password</small>
                  <button /*onClick={handleSignIn}*/>Login</button>
                </div>
                <button /*onClick={registerSignIn}*/>Register</button>
              </div>
            </div>

            <div className="login_lang">
              <p>हिन्दी</p>
              <ArrowForwardIosIcon fontSize="small" />
            </div>

            <div className="login_footer">
              <p>About</p>
              <p>Contact</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Language</p>
              <p>&copy; iKnowIt bec project</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Login;