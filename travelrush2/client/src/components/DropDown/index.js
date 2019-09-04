import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function DropDown(props) {
  return (
    <div class="input-field col s12">
      <select>
        <option value="" disabled selected>
          Choose your travel preference
        </option>
        <option value="1">Flight</option>
        <option value="2">Drive</option>
      </select>
      <label>Materialize Select</label>
    </div>
  );
}
