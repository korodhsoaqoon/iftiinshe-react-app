import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const CourseListing = ({ course }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0, 130) + "....";
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{course.type}</div>
            <h3 className="text-xl font-bold">{course.title}</h3>
          </div>
          <div className="mb-5">{description}</div>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="mb-5 text-indigo-500"
          >
            {showFullDescription ? "Less" : "More"}
          </button>
          <div className="flex justify-between mb-5">
            <h3 className="text-indigo-500">Duration: {course.duration}</h3>
            <h3 className="text-indigo-500">Price: $ {course.price}</h3>
          </div>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3 flex gap-3 items-center">
              <FaCode className="text-xl " />{" "}
              <span className="font-semibold">{course.technology}</span>
            </div>
            <NavLink
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 flex items-center justify-center rounded-lg"
              to={`/courses/${course.id}`}
            >
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseListing;
