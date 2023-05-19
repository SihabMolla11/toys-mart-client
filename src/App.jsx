import Header from "./Components/Header&footer/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Header&footer/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="bg-[#F2F2F2]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
