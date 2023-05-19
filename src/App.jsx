import Header from "./Components/Header&footer/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Header&footer/Footer";

const App = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div>
        <Header></Header>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
