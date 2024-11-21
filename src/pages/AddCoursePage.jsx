import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCoursePage = () => {
  const [type, setType] = useState("Front End");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [technology, setTechnology] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newCourse = {
      title,
      type,
      description,
      duration,
      technology,
      price,
      instructor: {
        name,
        description: bio,
        contactEmail,
        contactPhone,
      },
    };

    const res = await fetch("http://localhost:5000/courses", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });
    return navigate("/courses");
  };
  return (
    <>
      <section className="bg-indigo-100">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 shadow-md rounded-md border mt-4 md:m-0">
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Add Course
              </h2>
              <div className="mb-4">
                <label
                  className="text-gray-700 mb-6 block font-bold"
                  htmlFor="type"
                >
                  Course Type
                </label>
                <select
                  className="border rounded w-full py-2 px-3"
                  name="type"
                  id="type"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full Stack">Full Stack</option>
                  <option value="Front End">Front End</option>
                  <option value="Back End">Back End</option>
                  <option value="Database">Database</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="title"
                >
                  Course Title
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="text"
                  id="title"
                  placeholder="eg. React Course"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add your course description, ...."
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="duration"
                >
                  Duration
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="text"
                  id="duration"
                  placeholder="eg. 1 month."
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="technlogies"
                >
                  Technlogies
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="text"
                  id="technlogies"
                  placeholder="eg. html, css ...."
                  required
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="number"
                  id="price"
                  placeholder="eg. $ 10"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <h3 className="text-2xl mb-5">Instructor Info</h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Instructor Name
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="text"
                  id="name"
                  placeholder="eg. Abdillahi, "
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="bio"
                >
                  Instructor Bio
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3 mb-2"
                  name="Bio"
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Contact Email
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="email"
                  id="email"
                  placeholder="eg. example@gmail.com "
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Contact Phone
                </label>
                <input
                  className="border rounded w-full py-2 px-3 mb-2"
                  type="tel"
                  id="phone"
                  placeholder="eg. +252 63 00000000 "
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCoursePage;
