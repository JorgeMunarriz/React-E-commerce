import { CartModal, Footer, Header, ChangeTheme } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <CartModal img={""} id={0} name={""} price={0} />
      <main className="main-section">
        <Outlet />
      </main>
      <Footer />
      <ChangeTheme />
    </>
  );
};
