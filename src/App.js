import React , {useState} from "react";
import "./App.css";
import Pages from "./Components/pages/Pages";


function App() {
  const [sidebar ,setSidebar] = useState(false)

    const ToggleSidebar = () => {
      setSidebar((prevState) => !prevState)
    }

  return (
    <div className="App">
      <Pages />
     
    </div>
  );
}

export default App;
