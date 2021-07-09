import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import ChakraCards from "./components/ChakraCards";
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
  const [chakras, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header>
          < Header />
      <nav>
          < Navbar />
      </nav> 
      </header>
    <div className="container">
    <div style={{ 
      backgroundImage: `url("https://imgur.com/.jpg")` 
    }}>
      <img src="https://imgur.com/j6O50Ze.jpg" height="300px" width="auto"></img>        
      {/* <ChakraCards /> */}
        <Crown />
        <ThirdEye />
        <Throat />
        <Heart />
        <SolarPlexus />
        <Sacral />
        <Root />
    </div>  
          
      </div>
      {/* <Alignment /> */}
    </div>
  );
}

export default App;