import CourseListing from "./CourseListing";
import courses from "../courses.json";
const CourseListings = () => {
  const recentCourses = courses.slice(0, 3);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">
            Recent Courses
          </h1>
          {/* <!-- Courses grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {recentCourses.map((course) => (
              <CourseListing course={course} key={course.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseListings;
