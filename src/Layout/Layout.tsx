import React from "react";
import SubHeader from "../components/UI/SubHeader/SubHeader";
import Header from "../components/UI/Header/Header";

import Main from "../components/UI/Main/Main";
import Destination from "../components/UI/Destination/Destination";
import About from "../components/UI/About/About";
import Testimonies from "../components/UI/Testimonies/Testimonies";
const Layout = (): JSX.Element => {
  return (
    <React.Fragment>
      <SubHeader />
      <Header />
      <Main />
      <Destination />
      <About />
      <Testimonies />
    </React.Fragment>
  );
};

export default Layout;
