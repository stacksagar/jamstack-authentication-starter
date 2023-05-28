import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <div className="text-4xl text-blue-600">
      <div className="flex">
        <Link to="/">
          <img
            className="max-h-[35px] sm:max-h-[70px]"
            src="https://i.ibb.co/6n84hgp/584763.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
