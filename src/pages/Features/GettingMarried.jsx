import { Link } from 'react-router-dom';
import Layout from '../../components/common/Layout';
import DownloadsSection from '../../components/DownloadsSection';



const GettingMarried = () => {

     const downloads = [
    "City-specific marriage checklist",
    "Marriage form templates (DE/EN)",
    "Translation & Apostille Guide"
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Getting Married</h1>
          <h2 className="text-2xl text-blue-600 mb-8">In Germany</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Getting married in Germany as a foreigner requires paperwork, translations, and appointments. We guide you every step of the way.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Required Documents</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Birth certificate (translated & legalized)</li>
                  <li>Certificate of no impediment to marriage</li>
                  <li>Valid residence permit or visa</li>
                  <li>Registration confirmation (Meldebescheinigung)</li>
                  <li>Application form from Standesamt</li>
                  <li>Passport/ID copies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Process Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Collect all required documents</li>
                  <li>Get documents translated and legalized</li>
                  <li>Submit documents to Standesamt</li>
                  <li>Wait for approval (2-6 weeks)</li>
                  <li>Book and attend civil wedding</li>
                </ol>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                "Find a marriage lawyer",
                "Certified translators",
                "Marriage counselling",
                "Wedding venue booking",
                "Name change assistance",
                "International recognition"
              ].map((service, index) => (
                <div key={index} className="border p-3 rounded bg-gray-50">
                  <p className="text-gray-800">{service}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                Download Marriage Checklist
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
                Find Your Standesamt
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

export default GettingMarried;