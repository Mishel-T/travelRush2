import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {
  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">{props.dest}</label>
          </div>
        </div>
      </form>
    </div>
  );
}
