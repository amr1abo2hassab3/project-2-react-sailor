
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Serveices from "./pages/Serveices";
import Protfolio from "./pages/Protfolio";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import PageTop from "./components/pageTop/PagTop";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import ErrorPage from "./components/errorPage/Error";


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/serveices" element={<Serveices />} />
          <Route path="/protfolio" element={<Protfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element= {<ErrorPage />}/>
        </Routes>
        <PageTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App ;