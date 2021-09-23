import React from "react";
import Navbar from "./Components/Navbar";
import Booklist from "./Components/Booklist";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <Navbar />
      <Booklist />
    </ThemeContextProvider>

        
    </div>
  );
}

export default App;
