const CourseDetailsPage = () => {
  return (
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
              <div className="text-gray-500 mb-4">Font-End</div>
              <h1 className="text-3xl font-bold mb-4">HTML and CSS</h1>
              <div className="text-orange-700 flex items-center justify-center md:justify-start gap-2">
                <i className="fa-solid fa-code text-lg"></i>
                <span className="font-semibold">HTML, CSS</span>
              </div>
            </div>
            {/* <!-- description< --> */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-md mt-6">
              <h3 className="text-lg font-bold mb-6">Course Description</h3>
              <p className="mb-4">
                Want to master HTML and CSS? Our hands-on course will guide you
                through the process of creating stunning, responsive websites.
                Learn the fundamentals of web design and development, from
                structuring content with HTML to styling it beautifully with
                CSS. With real-world projects, you'll gain the skills needed to
                build professional-grade websites that adapt to any screen size.
                Start your journey today and unlock the potential of web
                development!
              </p>
              <hr />
              <div className="flex justify-between">
                <h3 className="text-indigo-500 mb-2 font-semibold">
                  Duration : 2 Months
                </h3>
                <h3 className="text-indigo-500 mb-2 font-semibold">
                  Price : $ 10
                </h3>
              </div>
            </div>
          </main>

          {/* <!-- sideBar (instructor info)--> */}
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6">Instructor Info</h3>
              <h2 className="text-2xl">Mohamed Abdillahi</h2>
              <p className="mt-2">
                Mohamed Abdillahi is a talented frontend developer skilled in
                creating responsive, user-friendly web interfaces. Proficient in
                HTML, CSS, JavaScript, and frameworks like React, he delivers
                clean, efficient code and innovative designs. Passionate about
                modern web trends, Mohamed thrives on building seamless,
                interactive user experiences
              </p>

              <hr className="my-4" />
              <h3 className="text-xl">Contact Email</h3>
              <p className="font-bold p-2 bg-indigo-100 rounded my-2">
                email@gmail.com
              </p>
              <h3 className="text-xl">Contact Phone</h3>
              <p className="font-bold p-2 bg-indigo-100 rounded my-2">
                +252 6644 444 44
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
  );
};

export default CourseDetailsPage;
