import { Link } from "react-router-dom";
import { useAuth } from "../../context/GlobalContext";
import DownloadsSection from "../../components/DownloadsSection";
import PremiumContentBanner from "../../components/PremiumContentBanner";

const BringingPet = () => {
  const { user } = useAuth();
  const downloads = [
    "Pet Import Checklist",
    "Sample health certificate",
    "Airport arrival process with a pet",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Bringing a Pet
        </h1>
        <h2 className="text-2xl text-blue-600 mb-8">To Germany</h2>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          {/* Free Content */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Basic Requirements
          </h2>
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
              </ol>
            </div>
          </div>

          {/* Premium Content - Only shown when logged in */}
          {user ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Premium Resources
              </h2>

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

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Premium Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Vet Chat or Appointment Booking",
                    "Pet Relocation Concierge",
                    "Lost Pet Support",
                    "QR-code collar tags with tracking",
                    "Personalized Checklist Builder",
                    "Recommended relocation agencies",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="border p-4 rounded-lg bg-blue-50"
                    >
                      <p className="text-gray-800 font-medium">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <PremiumContentBanner contentName="Unlock premium pet travel resources and services by logging in!" />
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

export default BringingPet;
