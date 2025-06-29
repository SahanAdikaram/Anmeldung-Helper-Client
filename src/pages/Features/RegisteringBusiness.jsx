import { Link } from "react-router-dom";
import { useAuth } from "../../context/GlobalContext";
import DownloadsSection from "../../components/DownloadsSection";
import PremiumContentBanner from "../../components/PremiumContentBanner";

const RegisteringBusiness = () => {
  const { user } = useAuth();
  const downloads = [
    "Business registration checklist",
    "Invoice template",
    "Sample business plan",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Registering</h1>
        <h2 className="text-2xl text-blue-600 mb-8">A Business in Germany</h2>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          {/* Free Content */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Business Setup Basics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Business Types
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Freelancer (Freiberufler)</li>
                <li>Sole Proprietor (Gewerbe)</li>
                <li>UG (Mini-GmbH)</li>
                <li>GmbH (Standard company)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Registration Steps
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Choose business type</li>
                <li>Book appointment at Gewerbeamt</li>
                <li>Submit Gewerbeanmeldung form</li>
                <li>Receive tax number from Finanzamt</li>
              </ol>
            </div>
          </div>

          {/* Premium Content - Only shown when logged in */}
          {user ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Premium Business Services
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Concierge Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Residency + Business Eligibility Check",
                    "Registration Concierge",
                    "Ready-to-Go Document Bundle",
                    "Bank + Insurance Setup",
                    "One-on-One Consulting",
                    "Tax Optimization Strategy",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="border p-4 rounded-lg bg-blue-50"
                    >
                      <h4 className="font-bold text-gray-800">{service}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Business Resource Hub
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Tax Deadlines Calendar",
                    "Industry-specific Guides",
                    "City Registration Guides",
                    "Brand Starter Kit",
                    "Legal Entity Comparison",
                    "VAT Filing Assistant",
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="border p-3 rounded hover:bg-white"
                    >
                      <p className="text-gray-800">{resource}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <PremiumContentBanner contentName="business registration" />
          )}

          <DownloadsSection downloads={downloads} />
        </div>

        <div className="text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisteringBusiness;
