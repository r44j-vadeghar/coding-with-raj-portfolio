import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    window.open(
      `mailto:vadegharraj@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <div id="contact" className="relative">
      <div className="hidden md:block clipScreenImageGradient overflow-hidden" />
      <div
        className={`hidden md:block bg-contact-img clipScreenImage opacity-40 lg:opacity-90 backdrop-blur-md overflow-hidden z-10`}
      />
      <div className="flex items-center sectionSize z-50 md:h-screen overflow-hidden">
        <div className="flex flex-col justify-start space-y-7 z-40 md:w-auto">
          <div className="flex items-end space-x-5">
            <p className="text-2xl md:hidden font-semibold px-5 mt-16 md:mt-0">
              Contact Me
            </p>
            <div className="hidden md:block w-36 h-20">
              <MailIcon className="h-28 -ml-4 text-white/60" />
            </div>
            <p className="hidden md:block text-gray-400">
              Get in touch with me to receive further details.
            </p>
          </div>
          <form className="flex flex-col space-y-7">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 space-x-5">
              <p className="w-36 pl-5 text-lg">Your Name:</p>
              <div className="p-2 bg-gray-900 flex-grow rounded-md">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-2 w-full bg-transparent outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 space-x-5">
              <p className="w-36 pl-5 text-lg ">Your Email:</p>
              <div className="p-2 bg-gray-900 flex-grow rounded-md">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 w-full bg-transparent outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 space-x-5">
              <p className="w-36 pl-5 text-lg ">Subject:</p>
              <div className="p-2 bg-gray-900 flex-grow rounded-md">
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="px-2 w-full bg-transparent outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-1 space-x-5">
              <p className="w-36 pl-5 text-lg">Your Message:</p>
              <div className="p-2 bg-gray-900 flex-grow rounded-md">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-2 w-full bg-transparent outline-none"
                  rows="8"
                  cols="25"
                />
              </div>
            </div>
            <div className="pl-5">
              <div
                tabIndex="0"
                type="submit"
                onClick={sendMail}
                className="blueButton"
              >
                <button className="outline-none">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
