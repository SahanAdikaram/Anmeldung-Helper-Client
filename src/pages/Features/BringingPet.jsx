import { Link } from "react-router-dom";
import Layout from "../../components/common/Layout";

import DownloadsSection from "../../components/DownloadsSection";

const BringingPet = () => {
  const downloads = [
    "Pet Import Checklist",
    "Sample health certificate",
    "Airport arrival process with a pet",
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Bringing a Pet
          </h1>
          <h2 className="text-2xl text-blue-600 mb-8">To Germany</h2>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Bringing a pet to Germany means meeting EU health and safety
              standards. We'll help you navigate all requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Requirements
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>ISO-compliant microchip</li>
                  <li>Valid rabies vaccination</li>
                  <li>Rabies antibody test (for some countries)</li>
                  <li>EU pet passport or health certificate</li>
                  <li>Approved pet carrier</li>
                  <li>Possible quarantine depending on origin</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Process Timeline
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Microchip implantation</li>
                  <li>Rabies vaccination (at least 21 days before travel)</li>
                  <li>Rabies titer test (3-4 months before travel)</li>
                  <li>Health certificate (within 10 days of travel)</li>
                  <li>Book pet-friendly transport</li>
                  <li>Customs clearance upon arrival</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Pet Travel Checklist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Microchip documentation",
                  "Vaccination records",
                  "Health certificate",
                  "Airline pet policy",
                  "EU entry points list",
                  "Emergency vet contacts",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      id={`pet-item-${index}`}
                      className="mt-1 mr-2 h-5 w-5 text-blue-600 rounded"
                    />
                    <label
                      htmlFor={`pet-item-${index}`}
                      className="text-gray-700"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                Download Pet Import Guide
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
                Find Pet Relocation Services
              </button>
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
         <DownloadsSection downloads={downloads} />
        
        <div className="text-center mt-8">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default BringingPet;
