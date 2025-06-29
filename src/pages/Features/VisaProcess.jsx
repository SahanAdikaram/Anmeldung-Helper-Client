import { Link } from "react-router-dom";
import { useAuth } from "../../context/GlobalContext";
import DownloadsSection from "../../components/DownloadsSection";
import PremiumContentBanner from "../../components/PremiumContentBanner";

const VisaProcess = () => {
  const { user } = useAuth();
  const downloads = [
    "Visa Checklist for Students",
    "Interview Prep Sheet",
    "Blocked Account Setup Guide",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Visa Process</h1>
        <h2 className="text-2xl text-blue-600 mb-8">
          For Students & Job Seekers
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          {/* Free Content */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Basic Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Required Documents
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Valid passport</li>
                <li>University admission/job search intent</li>
                <li>Blocked account proof</li>
                <li>Health insurance confirmation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Process Steps
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Check your eligibility</li>
                <li>Gather all required documents</li>
                <li>Open a blocked account</li>
                <li>Schedule embassy appointment</li>
              </ol>
            </div>
          </div>

          {/* Premium Content - Only shown when logged in */}
          {user ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Premium Visa Assistance
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    1-on-1 Consultation
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Personalized document review</li>
                    <li>Interview preparation session</li>
                    <li>Visa type eligibility assessment</li>
                    <li>Blocked account setup assistance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    Fast-Track Services
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Appointment booking assistance</li>
                    <li>Document translation services</li>
                    <li>Priority processing guidance</li>
                    <li>Emergency visa support</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recommended Service Providers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Expatrio (Blocked Account)",
                    "Fintiba (Blocked Account)",
                    "Mawista (Insurance)",
                    "Feather (Insurance)",
                    "Auswartiges Amt",
                    "Local Visa Consultants",
                  ].map((provider, index) => (
                    <div
                      key={index}
                      className="border p-3 rounded hover:bg-gray-50"
                    >
                      <p className="font-medium">{provider}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <PremiumContentBanner contentName="visa process" />
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

export default VisaProcess;
