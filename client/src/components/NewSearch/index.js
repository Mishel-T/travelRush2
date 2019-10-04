import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import history from "../../utils/history";
function SearchLink(props) {
  const handleClick = () => {
    //setTimeout(window.location.reload(), 1000);
    if (props.location.pathname === "/") {
      window.location.reload();
    }
    console.log(props.location.pathname);
  };

  return (
    <div>
      <a className="waves effect waves-teal btn-flat" onClick={handleClick}>
        New Search
      </a>
    </div>
  );
}

export default withRouter(SearchLink);
