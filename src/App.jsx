import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.jsx"
import Login from './Pages/Login.jsx'
import Signin from './Pages/Signin.jsx';
import Home from './Pages/customer/Home.jsx';
import Shop from './Pages/customer/Shop.jsx';
import About from './Pages/customer/About.jsx';
import Contact from './Pages/customer/contact.jsx';
import Dashboard from './Pages/seller/Dashboard.jsx';
import DeliveryDashboard from './Pages/Delivery/DDashboard.jsx'
import ProductDetails from "./pages/customer/ProductDetails";
import AuthLayout from "./Layout/AuthLayout.jsx"

const App = () => {
  return (
   <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      
        <Route path="/" element={<AuthLayout />}>
          <Route path="/deliveyDashboard" element={<DeliveryDashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>

      <Route path="/Login" element={<Login />}/>
      <Route path="/Signin" element={<Signin />}/>

    </Routes>
  )
}

export default App