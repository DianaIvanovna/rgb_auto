import React from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import "./ContactUs.scss";
import FieldInput from "../shared/FieldInput/FieldInput";
import Checkbox from "../shared/Checkbox/Checkbox";
import {SVG} from "../shared/icons";

const form = Yup.object().shape({
    firstName: Yup.string().required("this is a required field"),
    lastName: Yup.string().required("this is a required field"),
    companyName: Yup.string().required("this is a required field"),
    jobTitle: Yup.string().required("this is a required field"),
    workEmail: Yup.string().email("Invalid email").required("this is a required field"),
    phoneNumber: Yup.string().required("this is a required field"),
    country: Yup.string().required("this is a required field"),
    fleetSize: Yup.string().required("this is a required field"),
    yourMessage: Yup.string(),
    personalInfoConsent: Yup.boolean().oneOf([true], "Field must be checked"),
});

const customPhoneInput = props => {
    return <InputMask {...props} mask="+9 (999) 999-99-99" maskplaceholder="+0 (000) 000-00-00" />;
};

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h2 className="title--h2 title--attention contact-us__title mb_30">Please fill out the form below and we will contact you as soon as possible</h2>

            <div className="contact-us__container">
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        companyName: "",
                        jobTitle: "",
                        workEmail: "",
                        phoneNumber: "",
                        country: "",
                        fleetSize: "",
                        yourMessage: "",
                        personalInfoConsent: false,
                    }}
                    validationSchema={form}
                    onSubmit={values => {}}
                >
                    {({errors, values, touched}) => {
                        return (
                            <Form className="contact-us__form">
                                <FieldInput name="firstName" placeholder="First Name *" cx="mb_25" errors={errors.firstName} touched={touched.firstName} />
                                <FieldInput name="lastName" placeholder="Last name *" cx="mb_25" errors={errors.lastName} touched={touched.lastName} />
                                <FieldInput name="companyName" placeholder="Company  Name *" cx="mb_25" errors={errors.companyName} touched={touched.companyName} />
                                <FieldInput name="jobTitle" placeholder="Job title *" cx="mb_25" errors={errors.jobTitle} touched={touched.jobTitle} />
                                <FieldInput name="workEmail" placeholder="Work e-mail *" cx="mb_25" errors={errors.workEmail} touched={touched.workEmail} />
                                <FieldInput name="phoneNumber" placeholder="Phone number *" cx="mb_25" as={customPhoneInput} errors={errors.phoneNumber} touched={touched.phoneNumber} />
                                <FieldInput name="country" placeholder="Country *" cx="mb_25" errors={errors.country} touched={touched.country} />
                                <FieldInput name="fleetSize" placeholder="Fleet size *" cx="mb_25" errors={errors.fleetSize} touched={touched.fleetSize} />
                                <FieldInput name="yourMessage" placeholder="Your message" cx="mb_25" errors={errors.yourMessage} touched={touched.yourMessage} />
                                <Checkbox name="personalInfoConsent" checkboxtext="Yes, I would like to receive marketing communications regarding RGRauto.com products, services, and events" />
                            </Form>
                        );
                    }}
                </Formik>

                <div className="contact-us__contacts">
                    <ul className="contact-us__list">
                        <li className="mb_25">
                            <SVG id="carbon-mail-all" />
                            <div>
                                <a href="./" className="text text--color-basic mb_25">
                                    sales@rgrauto.com
                                </a>
                                <a href="./" className="text text--color-basic mb_25">
                                    support.usa@rgrauto.com
                                </a>
                                <a href="./" className="text text--color-basic">
                                    info@rgrauto.com
                                </a>
                            </div>
                        </li>
                        <li className="mb_25">
                            <SVG id="bi-phone-vibrate" />
                            <a href="./" className="text text--color-basic">
                                833-7472886
                            </a>
                        </li>
                        <li>
                            <SVG id="bi-clock" />
                            <p className="text text--color-basic">Monday–Friday 10AM to 6PM EST</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
