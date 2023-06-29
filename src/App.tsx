import "index.css";
import GlobalsProvider from "provider/GlobalsProvider";
import HomeTopNav from "component/HomeTopNav";
import LightSwitch from "component/LightSwitch";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <GlobalsProvider>
        <LightSwitch />
        <div className="content">
          <Outlet />
        </div>
      </GlobalsProvider>
    </div>
  );
}

export default App;
