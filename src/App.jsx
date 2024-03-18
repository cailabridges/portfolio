import React, { useContext, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Navbar from "./components/navbar/Navbar";
import AboutPg from "./pages/about/AboutPg";
import Footer from "./components/footer/Footer";
import ContactPg from "./pages/contact/ContactPg";
import ProductListPg from "./pages/productlist/ProductListPg";
import { ThemeContext } from "./context";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {currentPage === "home" && (
        <>
          <Navbar setCurrentPage={handleNavClick} />
          <Toggle />
          <Intro />
          <About />
          <ProductList />
          <Contact />
          <Footer />
        </>
      )}
      {currentPage === "about" && (
        <>
          <Navbar setCurrentPage={handleNavClick} />
          <AboutPg />
          <Footer />
        </>
      )}
      {currentPage === "contact" && (
        <>
          <Navbar setCurrentPage={handleNavClick} />
          <ContactPg />
          <Footer />
        </>
      )}
      {currentPage === "projects" && (
        <>
          <Navbar setCurrentPage={handleNavClick} />
          <ProductListPg />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
