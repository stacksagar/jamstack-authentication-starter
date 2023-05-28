import { useEffect } from "react";
import FIcons, { Icon } from "../../common/Icons/FIcons";
import HeaderLogo from "../Header/HeaderLogo";
import AdminSidebarItem, { AdminSidebarItemLink } from "./AdminSidebarItem";

export default function AdminSidebar() {
  useEffect(() => {
    const overlay = document.querySelector(".hs-overlay-backdrop");
    if (overlay) {
      let last: any = document.body.lastElementChild;
      document.body.removeChild(last);
    }
  }, []);

  return (
    <div>
      <div
        id="docs-sidebar"
        className="take_screen hs-overlay hs-overlay-open:translate-x-0 -translate-x-full duration-300 transform hidden fixed lg:static top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200  dark:border-gray-700 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800"
      >
        <div className="p-6 lg:hidden flex items-center justify-between">
          <HeaderLogo />
          <button
            type="button"
            className="border w-8 h-8 rounded focus:ring-2 dark:border-gray-700 ring-red-500 focus:text-red-500"
            data-hs-overlay="#docs-sidebar"
          >
            <Icon I={FIcons.faRemove} />
          </button>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <AdminSidebarItemLink
              to="/admin"
              text="Dashboard"
              I={FIcons.faHomeUser}
            />

            <AdminSidebarItem title="Sales" FIcon={FIcons.faUndoAlt}>
              <AdminSidebarItemLink to="/admin/sales" text="All Sales" />
            </AdminSidebarItem>

            <AdminSidebarItem title="Expense" FIcon={FIcons.faUndoAlt}>
              <AdminSidebarItemLink
                to="/admin/expenses/categories"
                text="Categories"
              />
              <AdminSidebarItemLink to="/admin/expenses" text="All Expense" />
            </AdminSidebarItem>

            <AdminSidebarItem title="Target Achive" FIcon={FIcons.faUndoAlt}>
              <AdminSidebarItemLink
                to="/admin/monthly-target"
                text="Monthly Target"
              />
              <AdminSidebarItemLink
                to="/admin/yearly-target"
                text="Yearly Target"
              />
            </AdminSidebarItem>

            {/* <AdminSidebarItemWithSub title="All Users" FIcon={FIcons.faUsers}>
              <AdminSidebarItemLinks
                title="Moderators"
                FIcon={FIcons.faUserGear}
              >
                <AdminSidebarItemLink to="/admin" text="Admin/Moderator" />
                <AdminSidebarItemLink
                  to="/admin/moderator"
                  text="Admin/Moderator"
                />
              </AdminSidebarItemLinks>
            </AdminSidebarItemWithSub> */}

            <AdminSidebarItem title="Management" FIcon={FIcons.faUndoAlt}>
              <AdminSidebarItemLink to="/admin/moderator" text="Moderators" />
              <AdminSidebarItemLink to="/admin/users" text="Users" />
            </AdminSidebarItem>

            <AdminSidebarItemLink
              to="/admin/reports"
              text="Reports"
              I={FIcons.faBlenderPhone}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}
