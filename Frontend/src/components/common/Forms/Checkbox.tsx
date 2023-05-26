import React from "react";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = ({ ...all }: props) => {
  return (
    <input
      {...all}
      type="checkbox"
      className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
      aria-describedby="hs-checkbox-delete-description"
    />
  );
};

export default Checkbox;
