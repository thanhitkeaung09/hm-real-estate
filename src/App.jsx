import Navbar from "./component/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
// import Products from "./Pages/Products/Product";
import Products from "./Pages/Products/Products";
// import Detail from "./Pages/Detail/Detail";
import Detail from "./Pages/Detail/DetailPage";
import { Toaster } from "react-hot-toast";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Confirm from "./Pages/Confirm/Confirm";
import Forget from "./Pages/Forget/Forget";
import Footer from "./component/Footer/Footer";
import Profile from "./Pages/Profile/Profile";
import ProfileEdit from "./Pages/Profile/Edit";
import PasswordEdit from "./Pages/Forget/Edit";
import ForgetPassword from "./Pages/Forget/Change";
import DynamicPage from "./Pages/Dynamic/Page";
import NotFound from "./Pages/NotFound/NotFound";
import AllComment from "./Pages/Comment/Page";
import AllReview from "./Pages/Review/Page";
import { useState } from "react";
const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    // Additional logic for handling language change, if needed
  };
  // console.log(selectedLanguage);
  return (
    <div className="overflow-x-hidden">
      <Toaster />
      <div className="flex flex-col h-[100vh] justify-between">
        <Router>
          <Routes>
            {/* Define routes that should not have Navbar here */}
            <Route
              path="register"
              element={<Register selectedLanguage={selectedLanguage} />}
            />
            <Route
              path="login"
              element={<Login selectedLanguage={selectedLanguage} />}
            />
            <Route path="confirm" element={<Confirm />} />
            <Route
              path="forget"
              element={<Forget selectedLanguage={selectedLanguage} />}
            />
            <Route
              path="forget-password"
              element={<ForgetPassword selectedLanguage={selectedLanguage} />}
            />

            {/* Define routes that should have Navbar here */}
            <Route
              path="*"
              element={
                <>
                  <Navbar onLanguageChange={handleLanguageChange} />
                  <Routes>
                    <Route
                      index
                      element={<Home selectedLanguage={selectedLanguage} />}
                    />
                    <Route path="*" element={<NotFound />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} />
                    <Route
                      path="products"
                      element={<Products selectedLanguage={selectedLanguage} />}
                    />
                    <Route
                      path="products/detail/:id"
                      element={<Detail selectedLanguage={selectedLanguage} />}
                    />
                    <Route
                      path="profile"
                      element={<Profile selectedLanguage={selectedLanguage} />}
                    />
                    <Route path="/edit" element={<ProfileEdit />} />
                    <Route path="password/edit" element={<PasswordEdit />} />
                    <Route
                      path="all/comments/:id"
                      element={
                        <AllComment selectedLanguage={selectedLanguage} />
                      }
                    />
                    <Route
                      path="all/reviews/:id"
                      element={
                        <AllReview selectedLanguage={selectedLanguage} />
                      }
                    />
                    <Route
                      path="/dynamic-content/:id"
                      element={
                        <DynamicPage selectedLanguage={selectedLanguage} />
                      }
                    />
                  </Routes>
                </>
              }
            />
          </Routes>
        </Router>
        <Footer selectedLanguage={selectedLanguage} className="" />
      </div>
    </div>
  );
};

export default App;
