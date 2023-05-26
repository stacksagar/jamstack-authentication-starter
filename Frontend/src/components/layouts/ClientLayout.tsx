import Footer from "../Others/Footer/Footer";
import Header from "../Others/Header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <div className={`take_screen`}>
        <div className="px-3 sm:px-5 mx-auto w-full h-full container space-y-12">
          {children}
        </div>
      </div>

      <Footer />
    </>
  );
}
