import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-24 flex items-center justify-center">

      <div className="max-w-3xl w-full text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 mb-10">
          I'm open to internships and opportunities. Feel free to connect with me!
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Email */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-md hover:scale-105 transition">
            <FaEnvelope className="text-2xl text-blue-400 mb-2 mx-auto" />
            <a
              href="mailto:khushiitomarr@gmail.com"
              className="text-white hover:underline"
            >
              khushiitomarr@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-md hover:scale-105 transition">
            <FaPhone className="text-2xl text-blue-400 mb-2 mx-auto" />
            <a
              href="tel:+919068185374"
              className="text-white hover:underline"
            >
              +91 9068185374
            </a>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919068185374"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-md hover:scale-105 transition block"
          >
            <FaWhatsapp className="text-2xl text-green-400 mb-2 mx-auto" />
            <p className="text-white">Chat on WhatsApp</p>
          </a>

          {/* Socials */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-md">
            <div className="flex mt-3 justify-center gap-6 text-2xl text-white">

              <a
                href="https://linkedin.com/in/khushiitomarrr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin size={34} />
              </a>

              <a
                href="https://github.com/khushiitomarr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaGithub size={34} />
              </a>
              <a
                href="https://instagram.com/khushii.tomarr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram size={34} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;