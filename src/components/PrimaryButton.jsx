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
      className={`px-8 py-3 bg-primary text-white font-heading font-black rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(255,69,0,0.5)] active:scale-95 cursor-pointer uppercase text-xs tracking-widest ${className}`}
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
