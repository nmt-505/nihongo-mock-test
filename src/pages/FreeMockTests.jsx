import { useEffect, useState } from "react";
import { getActiveMockTests } from "../services/mockTestService";
import { Link } from "react-router-dom";

function FreeMockTests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTests() {
      try {
        const data = await getActiveMockTests();

        // Only show free tests
        const freeTests = data.filter((test) => !test.premium);

        setTests(freeTests);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTests();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading mock tests...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Free Mock Tests
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-xl font-bold">
              {test.title}
            </h2>

            <p className="mt-2 text-gray-500">
              {test.category}
            </p>

            <p className="mt-2">
              Duration: {test.duration} minutes
            </p>

            <Link
              to={`/mock/${test.id}`}
              className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Start Test
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreeMockTests;