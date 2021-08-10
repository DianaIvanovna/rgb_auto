import React from "react";
import "./ContactUsPage.scss";
import ContactUs from "../ContactUs/ContactUs";
import logo from "../../image/logo/logo";

const ContactUsPage = () => {
    return (
        <div className="back--color-light">
            <div className="component">
                <h1 className="title title--dark mb_15">Contact us</h1>
                <p className="text text--dark mb_40">Have a question? Would you like to speak with us?</p>
                <ContactUs />

                <h2 className="title title--dark title__line--top mb_40">We proudly serve private small-to-medium fleets as well as large corporate fleets</h2>
                <div className="contact-us-page__logo mb_40">
                    {logo.map((item, index) => (
                        <img src={item} alt="logo" key={index} width={180} height={50} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ContactUsPage;
