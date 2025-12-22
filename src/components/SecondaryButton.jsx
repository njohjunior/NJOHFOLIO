import React from "react";
import { NavLink } from "react-router-dom";

export default function SecondaryButton({
  to,
  children,
  onClick,
  className = "",
  ...props
}) {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 border-2 border-white/20 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (to) {
    return <NavLink to={to}>{buttonContent}</NavLink>;
  }

  return buttonContent;
}
