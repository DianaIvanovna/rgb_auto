import React from "react";
import "./ContactUsPage.scss";
import ContactUs from "../ContactUs/ContactUs";

const ContactUsPage = () => {
    return (
        <div className="back--color-light">
            <div className="component">
                <h1 className="title title--dark mb_15">Contact us</h1>
                <p className="text text--dark mb_40">Have a question? Would you like to speak with us?</p>
                <ContactUs />
            </div>
        </div>
    );
};
export default ContactUsPage;
