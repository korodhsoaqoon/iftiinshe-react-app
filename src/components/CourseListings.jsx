import CourseListing from "./CourseListing";
import { ClipLoader } from "react-spinners";
import Spinner from "./Spinner";
// import courses from "../courses.json";
import { useState, useEffect } from "react";
const CourseListings = ({ isHome }) => {
  // const courseListing = isHome ? courses.slice(0, 3) : courses;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const apiUrl = isHome
        ? "http://localhost:5000/courses?_limit=3"
        : "http://localhost:5000/courses";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">
            {isHome ? "Recent Courses" : "Browse All Courses"}
          </h1>
          {/* <!-- Courses grid --> */}
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {courses.map((course) => (
                <CourseListing course={course} key={course.id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CourseListings;
