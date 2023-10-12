import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const contactHeader = useRef();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.36, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // Add the fade-in class
        } else {
          entry.target.classList.remove("fade-in"); // Remove the class if not intersecting
        }
      });
    }, options);

    if (contactHeader.current) {
      observer.observe(contactHeader.current);
    }

    return () => {
      if (contactHeader.current) {
        observer.unobserve(contactHeader.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        "service_7bfxful",
        "template_6mbbyht",
        form.current,
        "ZqFLcDB_zhkYxfVwy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        // Reset isSending to false after email sending completes
        setIsSending(false);
      });
  };

  return (
    <div ref={contactHeader} className="contact-container">
      <h1 className="contact-header">Let's get in touch!</h1>
      <form className="contact-inputs" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input" type="text" name="user_name" />
        <label>Email</label>
        <input className="input" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="input message" name="message" />
        <input
          className="send"
          type="submit"
          value={isSending ? "Loading..." : "Send it!"}
          disabled={isSending} // Disable the button while sending
        />
      </form>
    </div>
  );
}

export default Contact;
