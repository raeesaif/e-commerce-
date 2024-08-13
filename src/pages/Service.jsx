import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Service = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gray">
        <div className="max-w-3xl mx-auto p-6 text-justify">
          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Terms & Conditions
          </h1>

          {/* Terms and Conditions Content */}
          <p className="text-blue-200 text-lg mb-8">
            <strong>Terms</strong><br />
            By accessing the website at <a href="http://www.glamgrab.com/" className="text-blue-500 underline">http://www.glamgrab.com/</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Use License
          </h2>
          <p className="text-blue-200 text-lg mb-6">
            Permission is granted to temporarily download one copy of the materials (information or software) on Junaid Jamshed (Pvt.) Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Junaid Jamshed Pvt Ltd's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Junaid Jamshed Pvt Ltd at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Disclaimer
          </h2>
          <p className="text-blue-200 text-lg mb-6">
            The materials on Glam Grab Pvt Ltd's website are provided on an 'as is' basis. Junaid Jamshed Pvt Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            Further, Junaid Jamshed Pvt Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>

          {/* Additional Sections */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Limitations
          </h2>
          <p className="text-blue-200 text-lg mb-6">
            In no event shall Junaid Jamshed Pvt Ltd be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Junaid Jamshed Pvt Ltd's website, even if Junaid Jamshed Pvt Ltd or a Junaid Jamshed Pvt Ltd authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Accuracy of materials
          </h2>
          <p className="text-blue-200 text-lg mb-6">
            The materials appearing on Junaid Jamshed Pvt Ltd's website could include technical, typographical, or photographic errors. Junaid Jamshed Pvt Ltd does not warrant that any of the materials on its website are 100% accurate, complete or current. Junaid Jamshed Pvt Ltd may make changes to the materials contained on its website at any time without notice. However, Junaid Jamshed Pvt Ltd does not make any commitment to update the materials.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Product & Service Descriptions
          </h2>
          <p className="text-blue-200 text-lg mb-6">
            Whilst we try to display the colors of our products accurately on the Website, the actual colors you see will depend on your screen and we cannot guarantee that your screen's display of any color will accurately reflect the color of the product on delivery.
            All items are subject to availability. We will inform you as soon as possible if the product(s) or service(s) you have ordered are not available and we may offer an alternative product(s) or service(s) of equal or higher quality and value otherwise the order had to be canceled.
          </p>

          {/* Continue adding more sections as per the terms and conditions text provided */}

          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Contact Information
          </h2>
          <p className="text-blue-200 text-lg text-center">
            If you have any questions or concerns about our Terms & Conditions, please contact us at <a href="mailto:eshop@glamgrab.com" className="text-blue-500 underline">eshop@glamgrab.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
