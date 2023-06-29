import HomeTopNav from "component/HomeTopNav";

import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <HomeTopNav />
      <Outlet />
    </>
  );
};

export default Index;
