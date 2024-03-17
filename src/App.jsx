import { useContext, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Navbar from "./components/navbar/Navbar";
import AboutPg from "./pages/AboutPg";
import Footer from "./components/footer/Footer";


import { ThemeContext } from "./context";

const App = () => {
  
  const [currentPage, setCurrentPage] = useState("home");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
        <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "about" ? (
        <>
          <AboutPg />
          <Footer />
        </>
      ) : (
        <>
          <Toggle />
          {currentPage === "home" && <Intro />}
          <About />
          {currentPage === "home" && <ProductList />}
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
