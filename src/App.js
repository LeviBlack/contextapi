import React from "react";
import Navbar from "./Components/Navbar";
import Booklist from "./Components/Booklist";
import ThemeContextProvider from "./Context/ThemeContext";

import BookContextProvider from "./Context/BookContext";
import NewBookForm from "./Components/BookForm";



function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <Booklist />
          <NewBookForm />
        </BookContextProvider>
      </ThemeContextProvider>

        
    </div>
  );
}

export default App;
