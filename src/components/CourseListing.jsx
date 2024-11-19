const CourseListing = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Font-End</div>
            <h3 className="text-xl font-bold">HTML & CSS</h3>
          </div>
          <div className="mb-5">
            Want to master HTML and CSS? Our hands-on course will guide you
            through the process of creating stunning, responsive...
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
    </>
  );
};

export default CourseListing;
