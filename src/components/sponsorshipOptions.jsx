import React from "react";

const sponsorshipOptions = [
  {
    id: 1,
    title: "Gold Sponsor",
    benefits: [
      "Premium logo placement on all event materials",
      "Dedicated speaking slot at the event",
      "Social media promotion",
    ],
    cost: "₹5,00,000",
  },
  {
    id: 2,
    title: "Silver Sponsor",
    benefits: [
      "Logo placement on event materials",
      "Booth space at the event",
      "Social media mentions",
    ],
    cost: "₹3,00,000",
  },
  {
    id: 3,
    title: "Bronze Sponsor",
    benefits: [
      "Logo placement on website",
      "Acknowledgment during the event",
      "Certificate of appreciation",
    ],
    cost: "₹1,00,000",
  },
];

const SponsorshipPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Sponsorship Opportunities
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Join us as a sponsor and partner with IAC NIT Jamshedpur to support
          innovation and excellence.
        </p>

        {/* Sponsorship Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsorshipOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {option.title}
              </h2>
              <ul className="text-gray-700 mb-6 space-y-2">
                {option.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Investment: <span className="text-blue-600">{option.cost}</span>
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                Become a Sponsor
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact us to discuss how you can support our initiatives and gain
            visibility for your brand.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;
