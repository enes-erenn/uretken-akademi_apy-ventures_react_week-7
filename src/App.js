import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={<Products />} />
        <Route
          path="/product/:productId"
          exact
          component={<ProductDetails />}
        />
      </Router>
    </div>
  );
}

export default App;
