import Header from "../Others/Header/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <br />
      {children}
    </div>
  );
}
