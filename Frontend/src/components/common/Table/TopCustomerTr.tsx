import FlexCenter from "../Utils/FlexCenter";
import { User } from "../../../types/authTypes";

interface props {
  user: User;
}

const TopCustomerTr = ({ user }: props) => {
  return (
    <tr>
      <td className="relative">
        <FlexCenter className="absolute top-4">
          <img className="w-7 rounded" src={user?.picture || ""} alt="" />
          <p className="truncate">{user?.name}</p>
        </FlexCenter>
      </td>
      <td className="inline-flex">
        <a
          className="text-blue-500 hover:underline"
          href={`mailto:${user?.email}`}
        >
          {user?.email}
        </a>
      </td>
      <td>
        <a
          className="text-blue-500 hover:underline"
          href={`tel:${user?.phone}`}
        >
          {user?.phone}
        </a>
      </td>
    </tr>
  );
};

export default TopCustomerTr;
