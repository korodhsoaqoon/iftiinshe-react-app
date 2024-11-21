import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CourseDetailsPage = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:5000/courses/${id}`);
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

  // delete
  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure to delete this course?");
    if (!confirm) return;
    const res = await fetch(`http://localhost:5000/courses/${id}`, {
      method: "DELETE",
    });
    return navigate("/courses");
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section>
            <div className="container m-auto p-6">
              <Link
                className="text-indigo-500 hover:text-indigo-600"
                to="/courses"
              >
                <div className="flex gap-2 items-center">
                  <FaArrowLeft />
                  Back to Courses
                </div>
              </Link>
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
                      Price : $ {course.price}
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
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 w-full hover:bg-red-700 text-white text-center font-bold py-2 px-4 rounded-full focus:outline-one focus:shadow-outline mt-4 block"
                  >
                    Delete Course
                  </button>
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
