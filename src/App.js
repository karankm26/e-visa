import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./Components/Css/Home.css";
import "./Components/Css/ApplyForm.css";
import "./Components/Css/Nav.css";
import "./Components/Css/Status.css";
import NavBar from "./Components/NavBar";
// import NavBar from "./Components/NavBar";

import Home from "./Components/Home";
import ApplyForm from "./Components/ApplyForm";

import ContactUs from "./Components/ContactUs";
import Status from "./Components/Status";
import MultistepForm from "./Components/ApplicationForm";
import PaymentCheck from "./Components/PaymentCheck";
import DocumentsUpload from "./Components/Upload";
import AdminLogin from "../src/Admin/src/Components/AdminLogin";
import Customers from "../src/Admin/src/Pages/Customers/index";

import ContactUsAdmin from "../src/Admin/src/Pages/ContactUs/index";
import Orders from "../src/Admin/src/Pages/Orders/index";
import Protected from "../src/Admin/src/Components/Protected";
import View from "../src/Admin/src/Pages/View/index";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("admin");

  return (
    <React.Fragment>
      {isAdminRoute && (
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />

          <Route path="/admin/contact" element={<Protected />}>
            <Route path="/admin/contact" element={<ContactUsAdmin />} />
          </Route>
          <Route path="/admin/customers" element={<Protected />}>
            <Route path="/admin/customers" element={<Customers />} />
          </Route>
          <Route path="/admin/customers/:id" element={<Protected />}>
            <Route path="/admin/customers/:id" element={<View />} />
          </Route>
          <Route path="/admin/orders" element={<Protected />}>
            <Route path="/admin/orders" element={<Orders />} />
          </Route>
        </Routes>
      )}

      {!isAdminRoute && <NavBar />}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/status" exact element={<Status />} />
        <Route path="/apply_old" exact element={<ApplyForm />} />
        <Route path="/apply" exact element={<MultistepForm />} />
        <Route path="/apply/:id" exact element={<MultistepForm />} />
        <Route path="/payment/:id" exact element={<PaymentCheck />} />
        <Route path="/upload/:id" exact element={<DocumentsUpload />} />
        <Route path="/contactus" exact element={<ContactUs />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
