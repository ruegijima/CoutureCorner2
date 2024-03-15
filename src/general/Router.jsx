import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../home/Home.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import { Shop } from "../home/shop.jsx";
import { About } from "../home/about.jsx";
import { Blog } from "../home/blog.jsx";
import { Cart } from "../home/cart.jsx";
import { Community } from "../home/community.jsx";
import { Contact } from "../home/contact.jsx";
import { DesignerDashboard } from "../home/DesignerDashboard.jsx";
import { Designerportfolio } from "../home/designerportfolio.jsx";
import { Designers } from "../home/designers.jsx";
import { DesignerProfileCreate } from "../home/DesignersProfileCreate.jsx";
import { Events } from "../home/events.jsx";
import { Index } from "../home/index.jsx";
import { Login } from "../home/login.jsx";
import { ProductDetails } from "../home/productdetails.jsx";
import { Profile } from "../home/profile.jsx";
import { Project_Detail } from "../home/project-detail.jsx";
import { Resources } from "../home/resources.jsx";
import { Signup } from "../home/signup.jsx";
import { UserProfileCreate } from "../home/userprofilecreate.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route path="/shop" element={ <Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/community" element={<Community/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/designer-dashboard" element={<DesignerDashboard/>} />
    <Route path="/designer-portfolio" element={<Designerportfolio/>} />
    <Route path="/designers" element={<Designers/>} />
    <Route path="/designer-profile-create" element={<DesignerProfileCreate/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/index" element={<Index/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/product-details" element={<ProductDetails/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/project-detail" element={<Project_Detail/>} />
    <Route path="/resources" element={<Resources/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/user-profile-create" element={<UserProfileCreate/>} />

    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
