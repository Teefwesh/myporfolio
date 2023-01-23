import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x9whtpd",
        "template_gjzuujl",
        form.current,
        "PGAt8xmSsqC5sAAyZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Processing",
      success: "Message Sent Successfully",
      error: "Message rejected",
    });

    e.target.reset();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div
              className="contact__card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">info@smarttech.com</span>

              <a
                href="mailto:efetegaakpor@gmail.com"
                className="contact__button"
                rel="noopener noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div
              className="contact__card"
              data-aos="zoom-in-left"
              data-aos-duration="1500"
            >
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">
                <code>(+234)8168594341</code>
              </span>

              <a
                href="https://api.whatsapp.com/send?phone=2348168594341&text=Hello"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div
              className="contact__card"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Efe Tega</span>

              <a
                href="https://www.messenger.com/t/100083022454717"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
                required
              ></textarea>
            </div>

            <button className="button button--flex">Send Message</button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </section>
  );
};

export default Contact;
