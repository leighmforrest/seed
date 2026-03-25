import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default BaseLayout;
