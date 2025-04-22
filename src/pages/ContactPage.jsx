import React from "react";
import Carousel from "../components/Carousel/Carousel";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Carousel />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
