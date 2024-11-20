import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCoursePage from "./pages/AddCoursePage";
import NotFoundPage from "./pages/NotFoundPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/add-course" element={<AddCoursePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
