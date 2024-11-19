import logo from "./assets/logo.png";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import CourseListings from "./components/CourseListings";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HomeCards />
      <CourseListings />

      <section className="mx-auto max-w-lg my-10 px-6">
        <a
          className="block bg-black text-white text-center text-lg py-4 px-6 rounded-xl hover:bg-gray-700"
          href="courses.html"
        >
          View All Courses
        </a>
      </section>
    </div>
  );
};

export default App;
