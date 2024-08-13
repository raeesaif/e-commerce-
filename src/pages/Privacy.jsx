import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gray">
        <div className="max-w-3xl mx-auto p-6 text-justify">
          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          PRIVACY POLICY
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-blue-200 text-lg mb-8">
            Your privacy is important to us. It is Glam Grab (Pvt.) Ltd's policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://www.glamrab.com/" className="text-blue-500 underline">http://www.glamgrab.com/</a>, and other sites we own and operate.
          </p>

          {/* Information Collection Section */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          THE INFORMATION WE MAY COLLECT 
          </h2>
          <p className="text-blue-200 text-lg mb-6">
  We may collect and process the following types of personal information:
</p>
<ul className="list-disc list-inside text-blue-200 text-lg ml-4 mt-2">
  <li>Personal contact details such as name, title, address, email address, and telephone number as part of orders & account signup.</li>
  <li>Details of purchases and transactions.</li>
  <li>Information submitted as part of a survey.</li>
  <li>Records of correspondence with you by telephone, email, live chat, social media, or otherwise.</li>
  <li>Details of your visits to the website, and information about how your device has interacted with our website, including search and browsing history, the pages accessed, and links clicked.</li>
  <li>Information collected automatically from your device, including IP address, device type, operating system, unique device identification numbers, browser-type, broad geographic location (e.g., country or city-level location), and other technical information.</li>
</ul>


          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          HOW YOUR DATA IS COLLECTED
          </h2>
          <p className="text-blue-200 text-lg mb-6">
          We collect data from you when you register an account with us, subscribe to marketing communications from us, submit inquiries to us and/or purchase from us. We also collect information that you provide voluntarily to our customer services team, whether in writing, by telephone, email or live chat.
          <br /><br />
          We also collect some information automatically using cookies to improve the shopping experience. By using our website you agree that we can place these types of cookies on your device and access them when you visit the site in the future.
          </p>

         <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          HOW WE SECURE YOUR DATA
          </h2>
          <div className="text-blue-200 text-lg mb-6" >
          
          <p>
          We have put in place the necessary and appropriate safeguards and access controls to ensure the security, integrity, and privacy of the information you provide us with. Our website uses a Secure Socket Layer (SSL) encryption which encrypts your information to protect it from unauthorized use.
            <br /><br />
          </p>
          <p>
          No payment details are stored on our website. we receive encrypted information needed to verify and authorize your payment and to process your order.
          </p>
          </div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          WHO WE MAY SHARE YOUR DATA WITH
          </h2>
          <div className="text-blue-200 text-lg mb-6" >          
          <p >
           We may share some of your data with, or obtain personal information from, the following third parties:
           </p>
            <br />
            <h3 className="text-blue-200" >
            Service providers
            </h3>
            <br />
            <p>
            Third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, web hosting, and server providers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors, and payment systems operators;
            sponsors or promoters of any competition we run.
            </p>
            <br />
            <p>
            Third parties, including agents or sub-contractors, who assist us in providing information, products, services or direct marketing to you; and
            third parties to collect and process data.
            </p>
            </div>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          CHANGES TO THIS POLICY          </h2>
          <p className="text-blue-200 text-lg mb-6">
          CHANGES TO THIS POLICY At our discretion, we may change our privacy policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information.
         <br />
          If we make a significant change to this privacy policy, for example changing a lawful basis on which we process your personal information, we will ask you to re-consent to the amended privacy policy.
          </p>

          {/* Contact Information Section */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          CONTACT DETAILS
          </h2>
          <p className="text-blue-200 text-lg">
            If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@junaidjamshed.com" className="text-blue-500 underline">privacy@junaidjamshed.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
