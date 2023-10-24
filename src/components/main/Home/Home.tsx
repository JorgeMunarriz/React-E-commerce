import { ContainerMain, SideBar } from ".";
import "./GridHomePage.css";

/**
 * Represents the section of the main on the mainpage
 */
export const Home = () => {
  return (
    <>
      <div className="grid-home-page">
        <SideBar />
        <ContainerMain />
      </div>
    </>
  );
};
