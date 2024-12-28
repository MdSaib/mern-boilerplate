import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import ProductList from "./features/product/ProductList";
import ProductDetails from "./features/product/ProductDetails";
import Header from "./core/Header";
import Footer from "./core/Footer";

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define Routes Here */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;
