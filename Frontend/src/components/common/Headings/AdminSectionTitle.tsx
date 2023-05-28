import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const AdminSectionTitle = ({ to, title }: { to?: string; title?: string }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex items-center justify-between">
      <h4>{title}</h4>
      {to ? (
        <Link to={to}>
          <Button size="sm">View All</Button>
        </Link>
      ) : null}
    </div>
  );
};

export default AdminSectionTitle;
