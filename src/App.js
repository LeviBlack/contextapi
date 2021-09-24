import React from "react";
import Navbar from "./Components/Navbar";
import Booklist from "./Components/Booklist";
import ThemeContextProvider from "./Context/ThemeContext";
import AuthContextProvider from "./Context/AuthContext";
import Themetoggle from "./Components/Themetoggle";
import BookContextProvider from "./Context/BookContext";



function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <AuthContextProvider>
        <BookContextProvider>
          <Navbar />
          <Booklist />
        </BookContextProvider>
        <Themetoggle/>
      </AuthContextProvider>
    </ThemeContextProvider>

        
    </div>
  );
}

export default App;
