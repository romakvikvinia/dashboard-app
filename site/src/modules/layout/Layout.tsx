import { useState } from "react";
import { Outlet } from "react-router";

import Header from "../../common/Header";
import Sidebar from "../../common/SideBar";

import "../../assets/scss/style.scss";

function Layout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
