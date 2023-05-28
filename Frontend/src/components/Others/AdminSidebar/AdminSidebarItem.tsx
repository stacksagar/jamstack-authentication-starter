import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import FIcons, { Icon } from "../../common/Icons/FIcons";

interface Props {
  children: React.ReactNode | any;
  FIcon?: any;
  title: string;
}

export default function AdminSidebarItem({ children, FIcon, title }: Props) {
  const buttonRef = useRef<any>(null);
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (count > 2) return;

    const links: string[] =
      children?.length > 0
        ? children?.map((c: JSX.Element) => c.props.to)
        : [children.props.to];

    const curr = links.some((link) => link === location.pathname);
    if (curr) buttonRef.current.click();

    setCount((p) => p + 1);
  }, [count]);

  return (
    <li className="hs-accordion">
      <a
        ref={buttonRef}
        className="cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-300 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
      >
        <Icon I={FIcon} />
        {title}
        <div className="ml-auto flex items-center">
          <span className="hs-accordion-active:block hidden text-gray-600 group-hover:text-gray-500 dark:text-gray-400">
            <Icon I={FIcons.faChevronUp} />
          </span>

          <span className="hs-accordion-active:hidden block text-gray-600 group-hover:text-gray-500 dark:text-gray-400">
            <Icon I={FIcons.faChevronDown} />
          </span>
        </div>
      </a>

      <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
        <ul className="pt-2 pl-2">{children}</ul>
      </div>
    </li>
  );
}

export function AdminSidebarItemLink({
  to,
  text,
  I,
}: {
  to: string;
  text: string;
  I?: any;
}) {
  const location = useLocation();

  return (
    <li>
      <NavLink
        to={to}
        className={`${
          location.pathname === to
            ? "bg-blue-600 text-white"
            : "text-slate-700 dark:text-slate-300"
        } flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-md hover:bg-gray-200 hover:dark:bg-gray-700`}
      >
        <div className="flex items-center gap-4">
          {I ? (
            <Icon I={I} />
          ) : (
            <small className="text-xs">
              <Icon I={FIcons.faArrowRight} />
            </small>
          )}
          {text}
        </div>
      </NavLink>
    </li>
  );
}
