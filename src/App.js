import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 Not Found</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
