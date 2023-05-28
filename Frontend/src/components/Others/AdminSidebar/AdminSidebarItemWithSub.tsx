import { Icon } from "../../common/Icons/FIcons";

interface Props {
  children?: React.ReactNode | any;
  FIcon: any;
  title: string;
}
export default function AdminSidebarItemWithSub({
  children,
  title,
  FIcon,
}: Props) {
  return (
    <li className="hs-accordion">
      <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
        <Icon I={FIcon} />
        {title}
      </a>

      <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
        <ul
          className="hs-accordion-group pl-3 pt-2"
          data-hs-accordion-always-open
        >
          {children}
        </ul>
      </div>
    </li>
  );
}

export function AdminSidebarItemLinks({
  children,
  title,
  FIcon,
}: {
  children: React.ReactNode | any;
  title: string;
  FIcon: any;
}) {
  return (
    <li className="hs-accordion" id="users-accordion-sub-1">
      <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
        <Icon I={FIcon} />
        {title}
      </a>

      <div
        id="users-accordion-sub-1"
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
      >
        <ul className="pt-2 pl-2">{children}</ul>
      </div>
    </li>
  );
}
