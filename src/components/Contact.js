import React from "react";

export default function Contact() {
  return (
    <section id="Contact" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
          <form className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-2xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h3 className="text-lg font-medium mb-3">Follow me or contact me on:</h3>
        <div className="flex">
          <a
            href="https://www.github.com/markotuya0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-3">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.twitter.com/mark4slatty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mark-otuya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-3">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/+2348117644774"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-3">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="mailto:markotuya0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-3">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
