import React from "react";

export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  textarea,
  rows = 4,
  required,
  ...props
}) {
  const commonClasses = `w-full px-4 py-3 bg-dark border border-gray-800 rounded-lg text-white focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder:text-gray-600`;

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-white font-medium text-sm">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${commonClasses} resize-none`}
          placeholder={placeholder}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
}
