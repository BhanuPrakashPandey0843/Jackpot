import React from "react";

const ContactForm = () => {
  return (
    <div className="flex-grow px-4 md:px-20 py-12 bg-gradient-to-br from-white via-orange-50 to-white">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="p-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-2"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all text-lg font-semibold w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
