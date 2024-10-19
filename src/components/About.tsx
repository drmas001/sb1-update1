import React, { useState } from 'react';
import { Info, User, Heart, Book, ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);

  const toggleTerms = () => {
    setIsTermsExpanded(!isTermsExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <Info className="mr-2 h-8 w-8 text-indigo-600" />
        About IMD-Care
      </h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-4">
            Welcome to IMD-Care, a comprehensive digital solution for managing inpatient care in hospitals. Our goal is to enhance the quality of medical care by simplifying patient management and providing accurate, real-time information to the medical team.
          </p>
          <p className="text-gray-600 mb-4">
            IMD-Care is designed to be an effective tool that helps doctors and nurses track patient status and make swift, informed decisions. By streamlining the management of patient information, we aim to improve the efficiency of healthcare delivery and ultimately contribute to better patient outcomes.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Real-time patient status tracking</li>
            <li>Efficient admission and discharge processes</li>
            <li>Specialty-based patient management</li>
            <li>Comprehensive daily reporting</li>
            <li>User-friendly interface for healthcare professionals</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Team</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <User className="mr-2 h-5 w-5 text-indigo-600" />
              Dr. Saad Mashbab Al-Qahtani
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Head of Internal Medicine Departments at the Armed Forces Hospital in the South
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Dr. Al-Qahtani developed the concept and supervised the project to ensure it meets the needs of healthcare professionals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <User className="mr-2 h-5 w-5 text-indigo-600" />
              Dr. Mohammed Ayed Al-Shahri
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Technical Lead
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Dr. Al-Shahri is responsible for the technical execution of the project, ensuring ease of use and efficiency in a hospital environment.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:p-6">
          <button
            onClick={toggleTerms}
            className="flex items-center justify-between w-full text-left"
          >
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Book className="mr-2 h-6 w-6 text-indigo-600" />
              Terms and Conditions
            </h2>
            {isTermsExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          
          {isTermsExpanded && (
            <div className="mt-4 text-gray-600">
              <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="mb-4">By using IMD-Care, you agree to comply with and be bound by these terms and conditions. If you do not agree with these terms, please refrain from using the application.</p>

              <h3 className="font-semibold mb-2">2. Data Confidentiality</h3>
              <p className="mb-4">IMD-Care is committed to maintaining the confidentiality of patient data. All patient information is securely stored, and only authorized personnel have access to it. Users must ensure that they do not share any patient data outside the application to protect patient privacy.</p>

              <h3 className="font-semibold mb-2">3. User Responsibilities</h3>
              <p className="mb-4">Users of IMD-Care, including medical staff, must use the application responsibly. They are expected to enter accurate information, update patient records as needed, and comply with hospital policies regarding data handling.</p>

              <h3 className="font-semibold mb-2">4. Limitation of Liability</h3>
              <p className="mb-4">IMD-Care is provided as a tool to assist healthcare professionals in managing patient care. While every effort is made to ensure the accuracy of the information provided, IMD-Care is not liable for any errors or omissions in the data or for any decisions made based on the information provided by the application.</p>

              <h3 className="font-semibold mb-2">5. Access and Security</h3>
              <p className="mb-4">Access to IMD-Care is restricted to authorized personnel only. Users must keep their login credentials secure and must not share them with anyone else. Any unauthorized access or use of the application will be subject to disciplinary action as per hospital policy.</p>

              <h3 className="font-semibold mb-2">6. Changes to Terms</h3>
              <p className="mb-4">IMD-Care reserves the right to modify these terms and conditions at any time. Users will be notified of any significant changes, and continued use of the application will indicate acceptance of the new terms.</p>

              <h3 className="font-semibold mb-2">7. Contact Information</h3>
              <p>For any questions or concerns regarding these terms and conditions, please contact the administration of the Internal Medicine Department.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 flex items-center justify-center">
          <Heart className="mr-2 h-5 w-5 text-red-500" />
          Developed with care for healthcare professionals and patients alike
        </p>
      </div>
    </div>
  );
};

export default About;