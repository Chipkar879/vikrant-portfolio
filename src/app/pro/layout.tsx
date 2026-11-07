import Nav from "@/components/pro/Nav";
import Footer from "@/components/pro/Footer";

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}