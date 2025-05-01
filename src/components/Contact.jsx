import React, { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xi0igl", // Service ID
        "template_g47evdw", // Template ID
        formRef.current,
        "UeWsfEAvFQjZG-y02" // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Full-stack software engineer with strong team collaboration and
                independent problem-solving skills. Proven experience in
                building and deploying scalable applications using AWS, .NET,
                and modern frontend technologies. Highly adaptable, with
                excellent interpersonal skills and a passion for continuous
                learning and tackling complex challenges. Looking to join a
                dynamic development team where I can grow professionally and
                make a meaningful impact.
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let's connect!
            </p>
            <input
              type="text"
              name="name"
              placeholder="Your Name ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
