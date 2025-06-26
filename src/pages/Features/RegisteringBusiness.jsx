import { Link } from "react-router-dom";
import Layout from "../../components/common/Layout";

import DownloadsSection from "../../components/DownloadsSection";

const RegisteringBusiness = () => {
  const downloads = [
    "Business registration checklist",
    "Invoice template",
    "Sample business plan",
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Registering</h1>
          <h2 className="text-2xl text-blue-600 mb-8">A Business in Germany</h2>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a freelancer or setting up a company, Germany
              offers many opportunities - but paperwork comes first.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Business Types
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    type: "Freelancer",
                    desc: "Freiberufler (no trade license)",
                  },
                  { type: "Sole Proprietor", desc: "Gewerbe (trade license)" },
                  { type: "UG", desc: "Mini-GmbH (limited liability)" },
                  { type: "GmbH", desc: "Standard company form" },
                ].map((biz, index) => (
                  <div key={index} className="border p-4 rounded-lg bg-gray-50">
                    <h4 className="font-bold text-gray-800">{biz.type}</h4>
                    <p className="text-sm text-gray-600">{biz.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Required Documents
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Passport and visa/residence permit</li>
                  <li>Proof of residence in Germany</li>
                  <li>Business plan (for some visa types)</li>
                  <li>Anmeldung registration</li>
                  <li>Completed Gewerbeanmeldung form</li>
                  <li>Notarized documents (for GmbH/UG)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Registration Steps
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Choose your business type</li>
                  <li>Book appointment at Gewerbeamt</li>
                  <li>Submit Gewerbeanmeldung form</li>
                  <li>Receive tax number from Finanzamt</li>
                  <li>Register with IHK/HWK if required</li>
                  <li>Set up business bank account</li>
                </ol>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Business Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Sample business plan",
                "Invoice template (DE/EN)",
                "Tax deduction checklist",
                "VAT filing calendar",
                "Business insurance guide",
                "Employer registration info",
              ].map((resource, index) => (
                <a
                  href="#"
                  key={index}
                  className="border p-3 rounded hover:bg-gray-50 flex items-center"
                >
                  <span className="mr-2">📄</span>
                  <span>{resource}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                Download Business Starter Pack
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
                Find a Tax Consultant
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

export default RegisteringBusiness;
