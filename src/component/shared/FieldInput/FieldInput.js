import React from "react";
import "./FieldInput.scss";
import {Field} from "formik";

const FieldInput = props => {
    const {cx} = props;

    const isValid = () => {
        if (!props.touched) {
            return "";
        }

        if (props.touched && props.errors) {
            return "field-input--error";
        }

        return "field-input--valid";
    };

    return <Field {...props} className={`${cx ? `${cx} ` : ""}field-input ${isValid()} `} />;
};

export default FieldInput;
