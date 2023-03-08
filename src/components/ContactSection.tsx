import { MailIcon } from "@heroicons/react/solid";
import type { LottiePlayer } from "lottie-web";
import { FormEvent, useEffect, useRef, useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const contactRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web")
      .then((Lottie) => setLottie(Lottie.default))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (lottie && contactRef.current) {
      const animation = lottie.loadAnimation({
        container: contactRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/contact.json"
      });

      return () => animation.destroy();
    }
    return;
  }, [lottie]);

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={sendMail} id="contact" className="relative">
      <div className="clipScreenImageGradient hidden overflow-hidden md:block" />
      <div
        className={`clipScreenImage z-10 hidden overflow-hidden bg-contact-img opacity-40 backdrop-blur-md md:block lg:opacity-90`}
      />
      <div className="sectionSize z-50 flex items-center overflow-hidden md:h-screen">
        <div className="z-40 flex flex-col justify-start space-y-7 md:w-auto">
          <div className="flex items-end space-x-5">
            <span className="mt-16 px-5 text-2xl font-semibold md:mt-0 md:hidden">
              Contact Me
            </span>

            <div className="hidden h-20 w-36 md:block">
              <MailIcon className="-ml-4 h-28 text-white/60" />
            </div>
            <span className="hidden text-gray-400 md:block">
              Get in touch with me to receive further details.
            </span>
          </div>

          <div className="flex flex-col space-y-7">
            <div className="flex flex-col items-start space-y-1 space-x-5 md:flex-row md:items-center">
              <span className="w-36 pl-5 text-lg">Your Name:</span>
              <div className="flex-grow rounded-md bg-gray-900 p-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent px-2 outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1 space-x-5 md:flex-row md:items-center">
              <span className="w-36 pl-5 text-lg ">Your Email:</span>
              <div className="flex-grow rounded-md bg-gray-900 p-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-2 outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1 space-x-5 md:flex-row md:items-center">
              <span className="w-36 pl-5 text-lg ">Subject:</span>
              <div className="flex-grow rounded-md bg-gray-900 p-2">
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent px-2 outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1 space-x-5 md:flex-row">
              <span className="w-36 pl-5 text-lg">Your Message:</span>
              <div className="flex-grow rounded-md bg-gray-900 p-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent px-2 outline-none"
                  rows={8}
                  cols={25}
                />
              </div>
            </div>
            <button type="submit" className="blueButton pl-5 outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactSection;
