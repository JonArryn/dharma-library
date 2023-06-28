import HomeTopNav from "component/navigation/HomeTopNav";

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
