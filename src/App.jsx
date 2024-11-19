import logo from "./assets/logo.png";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HomeCards />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-500 mb-6">
            Recent Courses
          </h1>
          {/* <!-- Courses grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* <!-- Course 1 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Font-End</div>
                  <h3 className="text-xl font-bold">HTML & CSS</h3>
                </div>
                <div className="mb-5">
                  Want to master HTML and CSS? Our hands-on course will guide
                  you through the process of creating stunning, responsive...
                </div>
                <div className="flex justify-between mb-5">
                  <h3 className="text-indigo-500">Duration: 2months</h3>
                  <h3 className="text-indigo-500">Price: $ 10</h3>
                </div>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-code"></i> HTML, CSS
                  </div>
                  <a
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 flex items-center justify-center rounded-lg"
                    href="/course.html"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Course 2 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Database</div>
                  <h3 className="text-xl font-bold">SQL Mastery</h3>
                </div>
                <div className="mb-5">
                  Ready to dive into SQL and databases? In our practical,
                  beginner-friendly course, you'll learn how to efficiently
                  manage and manipulate data ...
                </div>
                <div className="flex justify-between mb-5">
                  <h3 className="text-indigo-500">Duration: 2months</h3>
                  <h3 className="text-indigo-500">Price: $ 15</h3>
                </div>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-code"></i> SQL, Posgresql
                  </div>
                  <a
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 flex items-center justify-center rounded-lg"
                    href="/course.html"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Course 3 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Back-End</div>
                  <h3 className="text-xl font-bold">Node & Express</h3>
                </div>
                <div className="mb-5">
                  Looking to master Node.js and Express? Our comprehensive
                  course will teach you how to build fast, scalable server-side
                  applications ....
                </div>
                <div className="flex justify-between mb-5">
                  <h3 className="text-indigo-500">Duration: 3months</h3>
                  <h3 className="text-indigo-500">Price: $ 20</h3>
                </div>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-code"></i> Node, Express, Prisma..
                  </div>
                  <a
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 flex items-center justify-center rounded-lg"
                    href="/course.html"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
