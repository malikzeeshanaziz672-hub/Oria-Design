import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(()=>import("../Pages/Home"));
const Contact = lazy(()=>import("../Pages/Contact"));
const About = lazy(()=>import("../Pages/About"));
const Features = lazy(()=>import("../Pages/Features"));
const Blog = lazy(()=>import("../Pages/Blog"));
const Newssletter = lazy(()=>import("../Pages/Newssletter"));
const FAQs = lazy(()=>import("../Pages/FAQs"));

const Router = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/newssletter" element={<Newssletter/>}/>
        <Route path="/faqs" element={<FAQs/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router