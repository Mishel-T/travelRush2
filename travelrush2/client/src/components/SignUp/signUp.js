// The state of the app is changed when the user clicks prompt
// User is redirected to sign-in page
// if login modal is scrapped, we will likely have another state change for the login page too
import React from "react";
import SignIn from "./signIn.js"

function SignIn() {
  return (
    <div>
      <h1>This is a Sign In Page Test</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default SignIn;