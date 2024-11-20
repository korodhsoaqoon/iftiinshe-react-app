import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCoursePage from "./pages/AddCoursePage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/add-course" element={<AddCoursePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
