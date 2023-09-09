import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Upload from "./pages/Upload";
function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/upload" Component={Upload}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
