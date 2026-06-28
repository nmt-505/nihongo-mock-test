import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-700">
            Japanese & Skill Exam Preparation Platform
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Practice with free and premium mock tests.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Start Free Mock Tests
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
              Premium Mock Tests
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;