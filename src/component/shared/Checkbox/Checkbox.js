import React from "react";
import "./Checkbox.scss";
import {Field} from "formik";
import {SVG} from "../icons";

const Checkbox = props => {
    const {checkboxtext, cx} = props;

    return (
        <label className={`checkbox${cx ? ` ${cx}` : ""}`}>
            <Field className="checkbox__field  visually-hidden" type="checkbox" {...props} />
            <span className="checkbox__btn">
                <span className="checkbox__checked">
                    <SVG id="checked" />
                </span>
            </span>
            <span className="checkbox__label">{checkboxtext}</span>
        </label>
    );
};

export default Checkbox;
