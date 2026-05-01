import { useTranslation } from "react-i18next";
import { useEffect, React } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Branch from "./page/Branch";
import Fallback from "./components/Fallback";
import { routes } from "./app/routes";
// import Home from "./page/Home";
// import Products from "./page/Products";
// import Contact from "./page/Contact";
// import About from "./page/About";
// import Partner from "./page/Partner";
// import ScrollToTop from "./components/ScrollToTop";
const Home = lazy(() => import("./page/Home"));
const Products = lazy(() => import("./page/Products"));
const Contact = lazy(() => import("./page/Contact"));
const About = lazy(() => import("./page/About"));
const Partner = lazy(() => import("./page/Partner"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const Branch = lazy(() => import("./page/Branch"));

function App() {
  const { i18n } = useTranslation();
  const location = useLocation(); // ✅ route detect

  // 🌍 RTL / LTR
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <ScrollToTop />
        <Navbar />

        <Routes location={location}>
          {/* <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} /> */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
