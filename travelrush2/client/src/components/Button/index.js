import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Button(props) {
  return (
    <button class="btn waves-effect waves-light" type="submit" name="action">
      Submit
      <i class="material-icons right">send</i>
    </button>
  );
}
