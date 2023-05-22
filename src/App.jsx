import Header from "./Components/Header&footer/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Header&footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init({
    duration: 1000,
    offset: 200
  });

  return (
    <div className="bg-[#F2F2F2]">
      <div>
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-472px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
