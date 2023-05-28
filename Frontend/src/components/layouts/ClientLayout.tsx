import Footer from "../Others/Footer/Footer";
import Header from "../Others/Header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header container={true} />

      <div className="px-2 sm:px-4 py-6 mx-auto w-full h-full container space-y-12 min-h-screen">
        {children}
      </div>

      <Footer />
    </>
  );
}
