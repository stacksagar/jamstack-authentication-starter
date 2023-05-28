import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  children: React.ReactNode;
}

const NLink = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-2 ${
          isActive
            ? "text-blue-600 font-medium"
            : "text-gray-700 dark:text-white"
        } block`
      }
    >
      {children}
    </NavLink>
  );
};

export default NLink;
