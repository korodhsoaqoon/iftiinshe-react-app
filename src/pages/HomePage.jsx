import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import CourseListings from "../components/CourseListings";
import ViewAllCourses from "../components/ViewAllCourses";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <CourseListings />
      <ViewAllCourses />
    </>
  );
};

export default HomePage;
