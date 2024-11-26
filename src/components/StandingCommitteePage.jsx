import React from "react";

const committeeMembers = [
  {
    id: 1,
    name: "Dr. A. B. Gupta",
    role: "Chairperson",
    image: "/images/gupta.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Dr. R. K. Singh",
    role: "Secretary",
    image: "/images/singh.jpg", // Replace with actual image paths
  },
  {
    id: 3,
    name: "Prof. P. K. Sharma",
    role: "Treasurer",
    image: "/images/sharma.jpg", // Replace with actual image paths
  },
  {
    id: 4,
    name: "Ms. S. R. Das",
    role: "Committee Member",
    image: "/images/das.jpg", // Replace with actual image paths
  },
  // Add more members as needed
];

const StandingCommitteePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Standing Committee
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Meet the dedicated members of our standing committee who work tirelessly to make our initiatives a success.
        </p>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-32 w-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandingCommitteePage;
