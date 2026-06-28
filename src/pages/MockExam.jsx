import { useParams } from "react-router-dom";

function MockExam() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-8">

        <div className="bg-white rounded-xl shadow p-8">

          <h1 className="text-3xl font-bold text-blue-700">
            Mock Exam
          </h1>

          <p className="mt-5">
            Exam ID: <strong>{id}</strong>
          </p>

          <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-lg p-5">
            <h2 className="font-bold text-lg">
              Exam Rules
            </h2>

            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Do not switch tabs.</li>
              <li>Fullscreen is required.</li>
              <li>Timer starts after clicking Start.</li>
              <li>Exam will auto submit when time is over.</li>
            </ul>
          </div>

          <button
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Start Exam
          </button>

        </div>

      </div>
    </div>
  );
}

export default MockExam;