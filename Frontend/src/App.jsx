import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
