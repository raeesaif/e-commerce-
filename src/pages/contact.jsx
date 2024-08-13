import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <h1 className="bg-gray text-blue-500 text-3xl p-4 m-2">
          CONTACT US
        </h1>
        <h2 className="bg-gray text-blue-500 text-2xl p-4 m-2">
          Let us know what you think.
        </h2>
        <div className="bg-gray text-blue-200 p-4 m-2">
          <h3>Should you have any questions, comments, or inquiries, please reach out to us.</h3>
        </div>
        <h2 className="bg-gray text-blue-500 p-4 m-2 text-2xl">
          FOR ONLINE STORE
        </h2>
        <div className="bg-gray text-blue-500 p-4 m-2">
          <h2>BY EMAIL</h2>
          <p className="bg-gray text-blue-200">
            <a href="mailto:eshop@glamgrab.com" className="text-blue-500 underline">
              eshop@glamgrab.com
            </a>
          </p>
        </div>
        <div className="bg-gray text-blue-500 px-6">
          <h2>BY TELEPHONE</h2>
          <p className="text-blue-200">
            021 111 112 111 (9am - 10pm, Monday - Saturday, Sunday 11am - 08pm)
          </p>
        </div>
        <div className="bg-gray text-blue-500 px-6">
          <h2>BY MAIL</h2>
          <p className="text-blue-200">
            G. Glam Grab Pvt Ltd
            <br />
            Head office, 40 Sector 19, Korangi Industrial Area
          </p>
        </div>
        <div className="bg-gray text-blue-500 p-4 m-2">
          <h2>BY EMAIL</h2>
          <p className="bg-gray text-blue-200">
            <a href="mailto:feedback@glamgrab.com" className="text-blue-200 underline">
              feedback@glamgrab.com
            </a>
          </p>
        </div>
        <div className="bg-gray text-blue-200 px-6">
          <h2>BY TELEPHONE</h2>
          <p className="text-blue-200">
            021 111 112 111 (9am - 6pm, Monday - Saturday)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
