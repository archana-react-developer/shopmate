import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "../pages";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home apiPath="/products" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
