import { IconExclamationCircle } from "@tabler/icons-react";
import React, { useState } from "react";

const Body = () => {
  const [formData, setFormData] = useState({
    jambScore: "",
    postUtmeScore: "",
    oLevelScores: Array(5).fill({ subject: "", grade: "" }), // 5 entries
  });

  const [showResult, setShowResult] = useState(false);

  const [score, setScore] = useState(0);

  console.log("formData", formData.oLevelScores);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOLevelChange = (index, field, value) => {
    const updatedScores = [...formData.oLevelScores];
    updatedScores[index] = { ...updatedScores[index], [field]: value };
    setFormData((prev) => ({
      ...prev,
      oLevelScores: updatedScores,
    }));
  };

  const oLevelSubject = [
    "Aptitude Test",
    "Agricultural Science",
    "Arabic",
    "Biology",
    "Book Keeping",
    "Chemistry",
    "Animal Husbandry",
    "Commerce",
    "Christian Religious Knowledge (CRK)",
    "Civic Education",
    "Accounts - Principles of Accounts",
    "Catering Craft Practice",
    "Computer Studies",
    "Current Affairs",
    "Data Processing",
    "English Language",
    "Economics",
    "Fine Arts",
    "French",
    "Further Mathematics",
    "Geography",
    "Government",
    "General Paper",
    "History",
    "Home Economics",
    "Hausa",
    "Insurance",
    "Igbo",
    "Islamic Religious Knowledge (IRK)",
    "Literature in English",
    "Mathematics",
    "Music",
    "Marketing",
    "Physics",
    "Physical Education",
    "Yoruba",
  ];

  const gradePoint = [
    { grade: "A1", point: 4.0 },
    { grade: "B2", point: 3.6 },
    { grade: "B3", point: 3.2 },
    { grade: "C4", point: 2.8 },
    { grade: "C5", point: 2.4 },
    { grade: "C6", point: 2.0 },
    { grade: "D7", point: 1.6 },
    { grade: "E8", point: 1.2 },
    { grade: "F9", point: 0.8 },
  ];

  const calculateScore = () => {
    const jambScore = parseInt(formData.jambScore || 0) / 8;
    const postUtmeScore = parseInt(formData.postUtmeScore || 0);

    // Sum O'Level points
    const oLevelTotal = formData.oLevelScores.reduce((sum, entry) => {
      const gradeObj = gradePoint.find((g) => g.grade === entry.grade);
      return sum + (gradeObj ? gradeObj.point : 0);
    }, 0);

    const total = jambScore + postUtmeScore + oLevelTotal;

    const aggregateScore = total.toFixed(2);

    setScore(aggregateScore);

    setShowResult(true);
  };

  let message = "";

  if (score >= 70) {
    message = "Excellent score! You have a very high chance of admission.";
  } else if (score >= 60) {
    message = "Good score! You have a competitive chance of admission.";
  } else if (score >= 50) {
    message =
      "Average score. Admission depends on competition for your course.";
  } else {
    message = "Low score. Consider other options or prepare for next year.";
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-[#f1f1f1] rounded p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-[#1c1c22]">
              Calculate Your Admission Score
            </h2>
            <p className="text-gray-500 text-sm">
              Enter your details below to calculate your admission score
            </p>
          </div>

          <div className="space-y-4">
            {/* JAMB */}
            <div>
              <label
                htmlFor="jambScore"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                JAMB Score (out of 400)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="jambScore"
                  id="jambScore"
                  onChange={handleChange}
                  value={formData.jambScore}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter your JAMB score"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">/400</span>
                </div>
              </div>
            </div>

            {/* Post UTME */}
            <div>
              <label
                htmlFor="postUtmeScore"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Post-UTME Score (out of 30)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="postUtmeScore"
                  id="postUtmeScore"
                  onChange={handleChange}
                  value={formData.postUtmeScore}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter your Post-UTME score"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">/30</span>
                </div>
              </div>
            </div>

            {/* O'Level Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  O' Level Subject
                </label>
                {formData.oLevelScores.map((entry, index) => (
                  <select
                    key={index}
                    value={entry.subject}
                    onChange={(e) =>
                      handleOLevelChange(index, "subject", e.target.value)
                    }
                    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select a subject</option>
                    {oLevelSubject.map((subject, i) => (
                      <option key={i} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  O' Level Grade
                </label>
                {formData.oLevelScores.map((entry, index) => (
                  <select
                    key={index}
                    value={entry.grade}
                    onChange={(e) =>
                      handleOLevelChange(index, "grade", e.target.value)
                    }
                    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select a grade</option>
                    {gradePoint.map((grade, i) => (
                      <option key={i} value={grade.grade}>
                        {grade.grade}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
            </div>

            <button
              onClick={calculateScore}
              disabled={
                !formData.jambScore ||
                !formData.postUtmeScore ||
                formData.oLevelScores.some((entry) => !entry.grade)
              }
              className="w-full bg-[#1c1c22] text-white py-3 rounded-lg hover:bg-[#1c1c22] transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              Calculate Score
            </button>
          </div>
        </div>

        {showResult && (
          <div
            id="resultsCard"
            className=" bg-[#f1f1f1] rounded-xl shadow-custom p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Admission Score
            </h2>
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div className="text-gray-600">Aggregate Score:</div>
              <div
                id="aggregateScore"
                className="text-3xl font-bold text-blue-600"
              >
                {score}
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <IconExclamationCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p id="admissionMessage" className="text-sm text-blue-700">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Body;
