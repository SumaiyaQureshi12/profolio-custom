import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "../../style/contact.css"; 

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2 className="contact-title" data-aos="zoom-in-up">
            Information
          </h2>
          <p className="contact-desc">
            I am a passionate and dedicated professional with a keen interest in. With a focus on learning and growth, I strive to deliver quality work while exploring innovative ideas. My goal is to contribute effectively, solve problems creatively, and make a positive impact through my skills and experiences.
          </p>
          <div className="contact-flex">
            <MdDriveFileRenameOutline size={28} className="text-accent" />
            <span>Sumaiya Qureshi</span>
          </div>
          <div className="contact-flex">
            <MdMarkEmailRead size={28} className="text-accent" />
            <span>sshushez@gmail.com</span>
          </div>
          <div className="contact-flex">
            <FaPhoneVolume size={28} className="text-accent" />
            <span>(+92) 000-0000</span>
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="contact-input"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className="contact-textarea"
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <button className="contact-button" data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
