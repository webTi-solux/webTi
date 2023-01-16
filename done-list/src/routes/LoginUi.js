import '../styles/LoginUi.css';
import logo from "../imgs/webTi_logo.png";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";

function LoginUi() {
  return (
    <div>
    <NavBeforeLogin/>
    <div className="main">
      <div className="sub-main">
          <div className="imgs">
            <div className="container-image">
              <img src={logo} alt="logo" className="logo"/>
            </div>
          </div>
              
          <div className='first-input'>
            <div className='v-line'></div>
            <span className="text-id">ID</span>
            <input className="user-id" type="text"/>
          </div>
        
          <div className="second-input">
            <div className="v-line2"></div>
            <span className="text-pwd">Password</span>
            <input className="user-pwd" type="password"/>
          </div>
        
          <div className="login-button">
            <button className="login-button-Ui">Login</button>
          </div>
      </div>
    </div>
    <UnderBar/>
    </div>
  );
}

export default LoginUi;