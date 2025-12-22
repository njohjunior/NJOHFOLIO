import React from "react";
import { NavLink } from "react-router-dom";

export default function PrimaryButton({
  to,
  children,
  onClick,
  className = "",
  ...props
}) {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 bg-primary text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] active:scale-95 cursor-pointer ${className}`}
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
