import React from "react";
// import Logo from "./teeny_logo.png"

function Modal () {
    return (
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        // <!-- Modal Structure -->
        <div id="modal1" class="modal modal-fixed-footer">
          <div class="modal-content">
            <h4>User Login</h4>
            <p>
              This is where the modal text and elements will go.
            </p>
          </div>
          <div class="modal-footer">
            <a href="/members" class="modal-close waves-effect waves-green btn-flat">I Understand</a>
          </div>
        </div>
    );
}

export default Modal;