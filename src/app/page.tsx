"use client";


export default function Home() {
  return (
    <div className="bg-[#252B42] w-full h-auto lg:w-[1440px] lg:h-[1132px] lg:pt-[30px] ml-[10px] opacity-[1]">
      {/* Navbar */}
      <div className="w-full h-auto lg:w-[1322px] lg:h-[91px] lg:ml-[59px] lg:px-32  ">
      <header className="container mx-auto p-6">
        <nav className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold hover:scale-150">BrandName</h1>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Product</a></li>
            <li><a href="#" className="hover:text-yellow-300">Pricing</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
          <div className="space-x-4 mt-4 lg:mt-0 flex flex-col lg:flex-row">
            <button className="textwhite hover:text-yellow-300">Login</button>
            <a href="#card1">
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:text-gray-700 font-bold">JOIN US</button>
            </a>
          </div>
        </nav>
      </header>
      </div>
      {/* TEXT SECTION */}
      <div className="w-full h-auto lg:w-[1046px] lg:h-[1028] mx-auto lg:mt-[104px] lg:ml-[197px] lg:pt-[80px] lg:pb-[80px] lg:gap-[80px] text-center">
  <section className="text-center px-8 py-8 lg:py-16">
    <p className="text-blue-400 hover:scale-150">Welcome</p>
    <h2 className="text-2xl lg:text-4xl font-bold">Selling on the</h2>
    <h2 className="text-2xl lg:text-4xl font-bold">internet like a pro</h2>
    <p className="mt-4 text-white">We know how large objects will act, but things on a</p>
    <p className="mt-2 text-white">small scale just do not act that way.</p>
    <div className="mt-4 lg:mt-8 space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row justify-center">
      <button className="bg-blue-500 px-1 py-4 lg:px-6 lg:py-3 rounded-lg text-white text-sm lg:text-base hover:text-gray-700 font-bold">
        Get Quote Now
      </button>
      <a href="./ideal">
        <button className="border border-white px-4 py-3 lg:px-6 lg:py-3 rounded-lg text-white text-sm lg:text-base hover:text-yellow-300 font-bold">
          Learn More
        </button>
      </a>
    </div>
  </section>
</div>

        {/* CARDS SECTION */}
        <section className="py-8 lg:px-20 sm:py-12 lg:py-16 bg-[#252B42]">
              <div className="container mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
        {/* Card 1 */}
              <div id="card1" className="bg-white p-4 sm:p-6 rounded-lg shadow-lg shadow-pink-400 hover:shadow-2xl hover:scale-125 text-gray-900">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-200 rounded-md mb-4"></div>
              <h3 className="font-bold text-md sm:text-lg">Training Courses</h3>
              <div className="w-6 sm:w-8 border-t-2 border-red-500 mt-2 mb-2"></div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
              The gradual accumulation of information about atomic and small-scale behavior...
              </p>
              </div>
        {/* Card 2 */}
              <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg shadow-green-400 hover:shadow-2xl hover:scale-125 text-gray-900">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-300 rounded-md mb-4"></div>
              <h3 className="font-bold text-md sm:text-lg">2,769 Online Courses</h3>
              <div className="w-6 sm:w-8 border-t-2 border-red-500 mt-2 mb-2"></div>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
              The gradual accumulation of information about atomic and small-scale behavior...
              </p>
              </div>
        {/* Card 3 */}
              <div className="bg-blue-400 p-4 sm:p-6 rounded-lg shadow-lg shadow-white hover:shadow-2xl hover:scale-125 text-white">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md mb-4"></div>
              <h3 className="font-bold text-md sm:text-lg">Training Courses</h3>
              <div className="w-6 sm:w-8 border-t-2 border-white mt-2 mb-2"></div>
              <p className="mt-2 text-white text-sm sm:text-base">
              The gradual accumulation of information about atomic and small-scale behavior...
              </p>
              </div>
              </div>
              </section>


    </div>
  );
}


/* https://www.figma.com/design/iDLLEdqoM8g4CltrfgsaXC/Assignment-II?node-id=1-17&node-type=frame&t=ApsEzRTu9iqDBKDo-0 */