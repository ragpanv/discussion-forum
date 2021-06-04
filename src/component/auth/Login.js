import React from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  auth,
  provider1,
  provider2,
  provider3,
  provider4,
  provider5,
} from "../../firebase";

function Login() {
  const signIn1 = () => {
    auth.signInWithPopup(provider1).catch((e) => alert(e.message));
    console.log(auth);
  };
  const signIn2 = () => {
    auth.signInWithPopup(provider2).catch((e) => alert(e.message));
    console.log(auth);
  };
  const signIn3 = () => {
    auth.signInWithPopup(provider3).catch((e) => alert(e.message));
    console.log(auth);
  };
  const signIn4 = () => {
    auth.signInWithPopup(provider4).catch((e) => alert(e.message));
    console.log(auth);
  };
  const signIn5 = () => {
    auth.signInWithPopup(provider5).catch((e) => alert(e.message));
    console.log(auth);
  };


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
          <p style={{ color: "royalblue", fontSize: "25px" }}>Made for BEC</p>
          <h3>Live to Learn</h3>

        
          <div className="login_auth">
            <div className="login_authOptions">
              <div className="login_authOption">
                <img
                  className="login__googleAuth"
                  src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                  alt=""
                />
                <p onClick={signIn1}>Continue With Google</p>
              </div>

              <div className="login_authOption">
                <img
                  className="login__googleAuth"
                  src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                  alt=""
                />
                <p onClick={signIn2}>Continue With Facebook</p>
              </div>

              <div className="login_authOption">
                <img
                  className="login__googleAuth"
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png"
                  alt=""
                />
                <p onClick={signIn3}>Continue With GitHub</p>
              </div>
            </div>

            <div className="login_authOptions">
              <div className="login_authOption">
                <img
                  className="login__googleAuth"
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-apple-os-1.png"
                  alt=""
                />
                <p onClick={signIn4}>Continue With Apple</p>
              </div>

              <div className="login_authOption">
                <img
                  className="login__googleAuth"
                  alt=""
                  src="https://www.freepnglogos.com/uploads/image-microsoft-logo--5.png"
                />
                <p onClick={signIn5}>Continue With Microsoft</p>
              </div>
            </div>
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
