import Sidebar from "@/components/navbar/Sidebar";

export default function Layout({ children }: any) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
