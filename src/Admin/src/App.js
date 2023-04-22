import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import Customers from "./Pages/Customers/index";

import ContactUs from "./Pages/ContactUs";
import Orders from "./Pages/Orders";
import Protected from "./Components/Protected";
import View from "./Pages/View/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />

        {/* <Route path="/inventory" element={<Protected />}> */}
        <Route path="/admin/contact" element={<ContactUs />} />
        {/* </Route> */}
        {/* <Route path="/customers" element={<Protected />}> */}
        <Route path="/admin/customers" element={<Customers />} />
        {/* </Route> */}
        {/* <Route path="/customers/:id" element={<Protected />}> */}
        <Route path="/admin/customers/:id" element={<View />} />
        {/* </Route> */}
        {/* <Route path="/orders" element={<Protected />}> */}
        <Route path="/admin/orders" element={<Orders />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}
export default App;
