import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Branch from "./page/Branch";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Products from "./page/Products";
import ScrollToTop from "./components/ScrollToTop";
import About from "./page/About";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Partner from "./page/Partner";
import GlobalLoader from "./components/GlobalLoader";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation(); // ✅ route detect

  // const [loading, setLoading] = useState(false);

  // 🌍 RTL / LTR
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // 🔥 Loader on route change
  // useEffect(() => {
  //   setLoading(true);

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 300); // adjust timing

  //   return () => clearTimeout(timer);
  // }, [location]);

  return (
    <>
      {/* {loading && <GlobalLoader />} */}
      <ScrollToTop />
      <Navbar />

      <Routes location={location}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
