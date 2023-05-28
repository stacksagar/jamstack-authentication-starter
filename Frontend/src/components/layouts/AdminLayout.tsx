import AdminSidebar from "../Others/AdminSidebar/AdminSidebar";
import Header from "../Others/Header/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <AdminSidebar />
        <div className="w-full p-4">{children}</div>
      </div>
    </>
  );
}
