import React from "react";

interface propTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: any;
  custom_ref?: any;
}

export default function CustomSelect({
  children,
  custom_ref,
  ...others
}: propTypes) {
  return (
    <select
      ref={custom_ref}
      {...others}
      className={`w-full h-12 bg-gray-50 dark:bg-gray-700 rounded border outline-none ${others.className}`}
    >
      {children}
    </select>
  );
}
