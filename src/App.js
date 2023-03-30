import Home from "./pages/home";
import About from "./pages/about";
import Navigation from "./components/nav/nav";
import ProductDetails from "./pages/productDetails";
import FormPage from "./pages/formPage";
import LiveFormPage from "./pages/liveFormPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route index element={<Home />} />{'landing page'}
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/form" element={<FormPage />}/>
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
