import React from "react";
import "./Window.css";

const Window = ({hero, children}) => {
  return (
    <div className="window">
      <header className="window__header">
        <i className="fa fa-free-code-camp"></i>
        {hero}
      </header>

      <div className="window__field">
        {children}
      </div>
    </div>
 )
};

export default Window;
