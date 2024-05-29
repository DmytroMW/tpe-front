import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navigation />
      <div id="contentContainer">
        <Outlet />
      </div>
    </>
  );
};

export default Root;