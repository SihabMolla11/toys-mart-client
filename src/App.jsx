import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3 className="text-4xl">{user}</h3>
    </div>
  );
};

export default App;
