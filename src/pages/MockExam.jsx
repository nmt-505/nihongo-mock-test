import { useParams } from "react-router-dom";
import { useState } from "react";
import ExamTimer from "../components/exam/ExamTimer";

function MockExam() {
  const { id } = useParams();
  const [started, setStarted] = useState(false);

  function handleTimeUp() {
    alert("Time is over! Exam submitted.");
  }

  function startExam() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }

    setStarted(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {!started ? (
          <>
            <h1 className="text-3xl font-bold text-blue-700">
              Mock Exam Instructions
            </h1>

            <p className="mt-2 text-gray-600">
              Exam ID: {id}
            </p>

            <div className="mt-6 border rounded-lg p-5 bg-blue-50">
              <ul className="list-disc ml-6 space-y-2">
                <li>Exam Duration: 60 Minutes</li>
                <li>Timer starts after clicking Start.</li>
                <li>Do not switch browser tabs.</li>
                <li>Fullscreen mode is recommended.</li>
              </ul>
            </div>

            <button
              onClick={startExam}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Start Exam
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <ExamTimer
                minutes={60}
                onTimeUp={handleTimeUp}
              />
            </div>

            <iframe
              title="Mock Exam"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfEP4VZJsFisFBxCnRhS9q4-1svm4qVKYvmYYDs8FdpBpaFWg/viewform?embedded=true"
              width="100%"
              height="700"
              className="border rounded-lg"
            />
          </>
        )}

      </div>
    </div>
  );
}

export default MockExam;