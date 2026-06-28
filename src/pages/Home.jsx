import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Button from "../components/ui/Button";
import CategoryCard from "../components/common/CategoryCard";

function Home() {
  const categories = [
    "JFT Basic",
    "Kaigo Japanese",
    "Kaigo Nepali",
    "Construction",
    "Building Cleaning",
  ];

  return (
    <>
      <Navbar />

      <section className="bg-blue-50 py-24">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-blue-700">
            Japanese & Skill Exam Preparation Platform
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Practice anywhere with free and premium mock tests.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Button text="Start Free Mock Tests" />
            <Button
              text="Premium Mock Tests"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Exam Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((item) => (
            <CategoryCard
              key={item}
              title={item}
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;