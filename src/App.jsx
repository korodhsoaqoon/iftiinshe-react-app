import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<h1>Courses Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
