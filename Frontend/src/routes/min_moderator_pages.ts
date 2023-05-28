import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import Expenses from "../pages/Admin/Expenses/Expenses";
import ExpensesCategories from "../pages/Admin/Expenses/ExpensesCategories";
import Moderatos from "../pages/Admin/Moderator/Moderatos";
import Reports from "../pages/Admin/Reports/Reports";
import Sales from "../pages/Admin/Sales/Sales";
import MonthlyTarget from "../pages/Admin/Target/MonthlyTarget";
import YearlyTarget from "../pages/Admin/Target/YearlyTarget";
import Users from "../pages/Admin/Users/Users";

const min_moderator_pages = {
  "": AdminDashboard,
  expenses: Expenses,
  "expenses/categories": ExpensesCategories,
  moderator: Moderatos,
  sales: Sales,
  users: Users,
  reports: Reports,
  "monthly-target": MonthlyTarget,
  "yearly-target": YearlyTarget,
};

export default min_moderator_pages;
