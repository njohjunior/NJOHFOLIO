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
      className={`px-8 py-3 border-2 border-white/20 text-white font-heading font-bold rounded-lg transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 cursor-pointer uppercase text-xs tracking-widest ${className}`}
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
