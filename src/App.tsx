import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {ThemeProvider} from "@mui/material/styles";
import Footer from "./components/Footer";
import {themeLight} from "./theme";
import ProductPage from "./pages/ProductPage";
import {CssBaseline} from "@mui/material";
import ProductsPage from "./pages/ProductsPage";
import ProductDashboardPage from "./pages/admin/ProductDashboardPage";
import Navbar from "./components/Navbar";

const anonymousRoutes = (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/product" element={<ProductPage/>} />
    <Route path="/products" element={<ProductsPage/>} />
    <Route path="/admin" element={<ProductDashboardPage/>} />
  </Routes>
);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <BrowserRouter>
            {/*<Navbar/>*/}
            {/* <Navbar /> */}

            {anonymousRoutes}</BrowserRouter>
        {/* <Footer/> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
