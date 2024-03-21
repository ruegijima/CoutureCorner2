import { Route, Routes } from "react-router-dom";

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
import { DesignerPortfolio } from "../home/designerportfolio.jsx";
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
import { Nav } from "../home/nav.jsx";
import { Footer } from "../home/footer.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={"/home"}
      element={
        <Layout>
          <Nav />
          <Home />
          <Footer />
        </Layout>
      }
    />
    <Route
      path={"/"}
      element={
        <Layout>
          <Index />
        </Layout>
      }
    />
    <Route
      path="/shop"
      element={
        <Layout>
          <Nav />
          <Shop />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/about"
      element={
        <Layout>
          <Nav />
          <About />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/blog"
      element={
        <Layout>
          <Nav />
          <Blog />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/cart"
      element={
        <Layout>
          <Nav />
          <Cart />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/community"
      element={
        <Layout>
          <Nav />
          <Community />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/contact"
      element={
        <Layout>
          <Nav />
          <Contact />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/designer-dashboard"
      element={
        <Layout>
          <Nav />
          <DesignerDashboard />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/designers/:designerId"
      element={
        <Layout>
          <Nav />
          <DesignerPortfolio />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/designers"
      element={
        <Layout>
          <Nav />
          <Designers />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/designer-profile-create"
      element={
        <Layout>
          <Nav />
          <DesignerProfileCreate />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/events"
      element={
        <Layout>
          <Nav />
          <Events />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/login"
      element={
        <Layout>
          <Login />
        </Layout>
      }
    />
    <Route
      path="/shop/:productId"
      element={
        <Layout>
          <Nav />
          <ProductDetails />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/profile"
      element={
        <Layout>
          <Nav />
          <Profile />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/project-detail"
      element={
        <Layout>
          <Nav />
          <Project_Detail />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/resources"
      element={
        <Layout>
          <Nav />
          <Resources />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/signup"
      element={
        <Layout>
          <Signup />
        </Layout>
      }
    />
    <Route
      path="/user-profile-create"
      element={
        <Layout>
          <Nav />
          <UserProfileCreate />
          <Footer />
        </Layout>
      }
    />

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
