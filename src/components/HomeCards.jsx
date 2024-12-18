import Card from "./Card";
import { Link } from "react-router-dom";
const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
            <Card>
              <h1 className="text-2xl font-bold">For Learners</h1>
              <p className="mt-2 mb-4">
                Browse our courses and start learning today
              </p>
              <Link
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                to="/courses"
              >
                Browse Courses
              </Link>
            </Card>
            <Card bg="bg-indigo-100">
              <h1 className="text-2xl font-bold">For Instructors</h1>
              <p className="mt-2 mb-4">
                Browse our courses and start learning today
              </p>
              <Link
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                to="/add-course"
              >
                Add Course
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
