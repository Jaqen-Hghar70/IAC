import React from "react";

const events = [
  {
    id: 1,
    title: "Hackathon 2024",
    date: "January 15, 2024",
    description: "A thrilling 24-hour hackathon to solve real-world problems.",
    image: "/images/hackathon.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "AI Workshop",
    date: "February 10, 2024",
    description:
      "Learn the fundamentals of AI and machine learning in this workshop.",
    image: "/images/ai-workshop.jpg", // Replace with actual image paths
  },
  {
    id: 3,
    title: "Annual Tech Fest",
    date: "March 20, 2024",
    description:
      "Join us for our annual tech fest with exciting events and competitions.",
    image: "/images/tech-fest.jpg", // Replace with actual image paths
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Upcoming Events
        </h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />

              {/* Event Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
