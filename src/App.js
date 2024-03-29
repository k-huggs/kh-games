import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";

// Styles
import { GlobalStyle } from "./GlobalStyles";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";
import ReviewsPage from "./components/ReviewsPage";
import Review from "./components/Review/Review";
import UsersPage from "./components/UsersPage";
import WelcomePage from "./components/WelcomePage";
import CategoriesPage from "./components/CategoriesPage";
import RegistrationFrom from "./components/RegisterForm";
import User from "./components/User/User";
import Category from "./components/Category/Category";

function App() {
  return (
    <UserProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="reviews/:reviewId" element={<Review />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/register" element={<RegistrationFrom />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="/categories/:categoryname" element={<Category />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </UserProvider>
  );
}

export default App;
