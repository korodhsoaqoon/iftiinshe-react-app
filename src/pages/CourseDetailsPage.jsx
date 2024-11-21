import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
const CourseDetailsPage = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch("http://localhost:5000/courses/3");
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section>
            <div className="container m-auto p-6">
              <a
                className="text-indigo-500 hover:text-indigo-600"
                href="/courses.html"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Courses
              </a>
            </div>
          </section>

          {/* <!-- Course Info --> */}
          <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6 grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6">
              {/* <!-- course info section --> */}
              <main>
                <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                  <div className="text-gray-500 mb-4">{course.type}</div>
                  <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                  <div className="text-orange-700 flex items-center justify-center md:justify-start gap-2">
                    <i className="fa-solid fa-code text-lg"></i>
                    <span className="font-semibold">{course.technology}</span>
                  </div>
                </div>
                {/* <!-- description< --> */}
                <div className="mt-6 bg-white rounded-lg p-6 shadow-md mt-6">
                  <h3 className="text-lg font-bold mb-6">Course Description</h3>
                  <p className="mb-4">{course.description}</p>
                  <hr />
                  <div className="flex justify-between">
                    <h3 className="text-indigo-500 mb-2 font-semibold">
                      Duration : {course.duration}
                    </h3>
                    <h3 className="text-indigo-500 mb-2 font-semibold">
                      Price : {course.price}
                    </h3>
                  </div>
                </div>
              </main>

              {/* <!-- sideBar (instructor info)--> */}
              <aside>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-3xl font-bold mb-6">Instructor Info</h3>
                  <h2 className="text-2xl">{course.instructor.name}</h2>
                  <p className="mt-2">{course.instructor.description}</p>

                  <hr className="my-4" />
                  <h3 className="text-xl">Contact Email</h3>
                  <p className="font-bold p-2 bg-indigo-100 rounded my-2">
                    {course.instructor.contactEmail}
                  </p>
                  <h3 className="text-xl">Contact Phone</h3>
                  <p className="font-bold p-2 bg-indigo-100 rounded my-2">
                    {course.instructor.contactPhone}
                  </p>
                </div>

                {/* <!-- Manage --> */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Courses</h3>
                  <a
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full focus:outline-one focus:shadow-outline mt-4 block"
                    href="#"
                  >
                    Edit Course
                  </a>
                  <a
                    className="bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 px-4 rounded-full focus:outline-one focus:shadow-outline mt-4 block"
                    href="#"
                  >
                    Delete Course
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CourseDetailsPage;
