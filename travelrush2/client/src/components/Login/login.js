import React from "react";

function Login () {
    return(
        <div>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>
        <div classname="container h-100">
          <div classname="d-flex justify-content-center h-100">
            <div classname="user_card">
              <div classname="d-flex justify-content-center">
                <div classname="brand_logo_container">
                  <img src="assests/images/Profile-512.png" className="brand_logo" alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text" name className="form-control input_user" id="emailInput" placeholder="username" />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input type="password" name className="form-control input_pass" id="passwordInput" placeholder="password" />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customControlInline" />
                      <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="button" name="button" id="loginButton" className="btn login_btn">Login</button>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account? <a href="/signup" className="ml-2">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;