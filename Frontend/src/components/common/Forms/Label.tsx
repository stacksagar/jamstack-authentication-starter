import React from "react";

interface props
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

const Label = ({ ...all }: props) => {
  return (
    <label
      {...all}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
    ></label>
  );
};

export default Label;
