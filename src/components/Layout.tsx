
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const Layout = ({ children, hideHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!hideHeader && <Header />}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
