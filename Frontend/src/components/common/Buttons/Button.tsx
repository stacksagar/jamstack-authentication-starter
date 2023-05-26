import classNames from "classnames";
import { useEffect, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "blue"
    | "gray"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "tear"
    | "cyan"
    | "sky"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
}

const Button = ({ size, color, loading, children, ...rest }: ButtonProps) => {
  const [dynamicClasses, setDynamicClass] = useState<any>();

  useEffect(() => {
    setDynamicClass(
      classNames({
        "px-2 py-1 text-xs": size === "xs",
        "px-2.5 py-1.5 text-xs": size === "sm",
        "px-3 py-2 text-xs ": size === "md",
        "px-4 py-2.5": size === "lg" || !size,
        "px-5 py-3": size === "xl",

        "bg-blue-600 text-white": color === "blue" || !color,
        "bg-gray-600 text-white": color === "gray",
        "bg-red-600 text-white": color === "red",
        "bg-orange-600 text-white": color === "orange",
        "bg-amber-600 text-white": color === "amber",
        "bg-yellow-600 text-white": color === "yellow",
        "bg-lime-600 text-white": color === "lime",
        "bg-green-600 text-white": color === "green",
        "bg-tear-600 text-white": color === "tear",
        "bg-cyan-600 text-white": color === "cyan",
        "bg-sky-600 text-white": color === "sky",
        "bg-indigo-600 text-white": color === "indigo",
        "bg-violet-600 text-white": color === "violet",
        "bg-purple-600 text-white": color === "purple",
        "bg-fuchsia-600 text-white": color === "fuchsia",
        "bg-pink-600 text-white": color === "pink",
        "bg-rose-600 text-white": color === "rose",
      })
    );
  }, [size]);

  return (
    <button
      {...rest}
      type={rest.type || "button"}
      disabled={loading}
      className={`text-sm w-full focus:ring-2 focus:outline-none focus:ring-primary-300 focus:ring-offset-1 dark:focus:ring-offset-0 font-medium rounded text-center flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed ${dynamicClasses} ${rest.className}`}
    >
      <span></span>
      <span className="flex items-center gap-x-1">{children}</span>

      {loading ? (
        <span className="block ml-2 sm:ml-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-spin border-[3px] sm:border-4 border-r-transparent"></span>
      ) : (
        <span></span>
      )}
    </button>
  );
};

export default Button;
