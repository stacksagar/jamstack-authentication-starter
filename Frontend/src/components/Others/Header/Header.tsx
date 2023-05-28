import { Button1 } from "tailwind-theme-toggle-buttons";
import { useAuth } from "../../../contexts/auth";
import { Icon, default as Icons } from "../../common/Icons/FIcons";
import HeaderAuth from "./HeaderAuth";
import HeaderLogo from "./HeaderLogo";
import HeaderUnAuth from "./HeaderUnAuth";
import NLink from "./NLink";

interface Props {
  container?: boolean;
}
export default function Header({ container }: Props) {
  const { auth } = useAuth();

  return (
    <header className="py-5 md:py-0 header_height relative flex items-center flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm dark:bg-gray-800">
      <nav
        className={`w-full mx-auto sm:flex sm:items-center sm:justify-between ${
          container ? "container" : "px-2 sm:px-4"
        } `}
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Header Left Elements */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="lg:hidden text-gray-500 hover:text-gray-600 text-lg"
              data-hs-overlay="#docs-sidebar"
              aria-controls="docs-sidebar"
              aria-label="Toggle navigation"
            >
              <Icon I={Icons.faBars} />
            </button>

            <HeaderLogo />
          </div>

          {/* Header Right Elements */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-mega-menu"
              aria-controls="navbar-with-mega-menu"
              aria-label="Toggle navigation"
            >
              <p className="hs-collapse-open:hidden w-6 text-sm">
                <Icon I={Icons.faBars} />
              </p>
              <p className="hs-collapse-open:block hidden w-6 text-sm">
                <Icon I={Icons.faRemove} />
              </p>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="w-full p-4 sm:p-0 hs-collapse hidden overflow-hidden duration-300 basis-full grow sm:block bg-white dark:bg-gray-800"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <Button1 />
            <NLink to="/">Home</NLink>

            <HeaderUnAuth />

            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
              <div
                id="hs-mega-menu-basic-dr"
                className="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 space-x-1"
              >
                <button
                  type="button"
                  className="focus:ring-2 p-2 my-2 mt-0 sm:mt-2 mr-2 ml-2 sm:ml-0 rounded flex items-center gap-2"
                >
                  <span> {auth?.user?.name || "Anonymouse"} </span>
                  <Icon I={Icons.faChevronDown} />
                </button>
              </div>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                <NLink to="/posts">Posts</NLink>

                <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Menus
                    <Icon I={Icons.faChevronDown} />
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                    <NLink to="/about">About</NLink>
                    <NLink to="/contact">Contact</NLink>
                  </div>
                </div>

                <NLink to="/about">About</NLink>

                <HeaderAuth />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
