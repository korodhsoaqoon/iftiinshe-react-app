import logo from "./assets/logo.png";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import CourseListings from "./components/CourseListings";
import ViewAllCourses from "./components/ViewAllCourses";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HomeCards />
      <CourseListings />
      <ViewAllCourses />
    </div>
  );
};

export default App;
