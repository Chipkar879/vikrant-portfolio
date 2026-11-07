import Nav from "@/components/pro/Nav";
import Footer from "@/components/pro/Footer";
import Atmosphere from "@/components/pro/Atmosphere";
import ScrollProgress from "@/components/pro/ScrollProgress";

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Atmosphere />
      <Nav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-16 pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}