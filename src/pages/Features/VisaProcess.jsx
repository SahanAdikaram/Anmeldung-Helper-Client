import { Link } from 'react-router-dom';
import Layout from '../../components/common/Layout';

import DownloadsSection from '../../components/DownloadsSection';



const VisaProcess = () => {
   
  const downloads = [
    "Visa Checklist for Students",
    "Interview Prep Sheet",
    "Blocked Account Setup Guide"
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Visa Process</h1>
          <h2 className="text-2xl text-blue-600 mb-8">For Students & Job Seekers</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Navigating the German visa process can be complex - we simplify it for you. Learn what documents you need, how to prepare, and where to apply.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Required Documents</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Valid passport</li>
                  <li>University admission/job search intent</li>
                  <li>Blocked account proof</li>
                  <li>Health insurance confirmation</li>
                  <li>Language certificate (if applicable)</li>
                  <li>Completed visa application form</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Process Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Check your eligibility</li>
                  <li>Gather all required documents</li>
                  <li>Open a blocked account</li>
                  <li>Schedule embassy appointment</li>
                  <li>Attend visa interview</li>
                  <li>Wait for approval (4-8 weeks)</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                <span className="font-semibold">Important:</span> Apply early - appointment slots fill up quickly, especially during peak seasons.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { name: "Expatrio", type: "Blocked Account" },
                { name: "Fintiba", type: "Blocked Account" },
                { name: "Mawista", type: "Insurance" },
                { name: "Feather", type: "Insurance" }
              ].map((service, index) => (
                <a 
                  href="#" 
                  key={index} 
                  className="border p-3 rounded hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-gray-500">{service.type}</p>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                Download Visa Checklist
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
                Book Visa Consultation
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

export default VisaProcess;