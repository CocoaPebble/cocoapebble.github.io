import Navbar from "@/components/ui/nav";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      <main className="w-full pt-24 container">{children}</main>
    </div>
  );
};

export default HomepageLayout;
