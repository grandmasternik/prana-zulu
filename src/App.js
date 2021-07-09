import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Alignment from "./components/Alignment";
import Root from "./components/Root";
import Sacral from "./components/Sacral";
import SolarPlexus from "./components/SolarPlexus";
import Heart from "./components/Heart";
import Throat from "./components/Throat";
import ThirdEye from "./components/ThirdEye";
import Crown from "./components/Crown";
import "./App.css";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <header>
          < Header />
      <nav>
          < Navbar />
      </nav> 
      </header>
    <div className="container">
      
     {/* backgorundImage: `url("https://imgur.com/PACfife.jpg")` */}
        
        <Crown />
        <ThirdEye />
        <Throat />
        <Heart />
        <SolarPlexus />
        <Sacral />
        <Root />
          
      </div>
      {/* <Alignment /> */}
    </div>
  );
}

export default App;