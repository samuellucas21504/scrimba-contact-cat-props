import React from "react";
import "./style.css";
import phoneIcon from "../../../images/phone-icon.png";
import mailIcon from "../../../images/mail-icon.png";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{props.phoneNumber}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p>{props.emailAddress}</p>
      </div>
    </div>
  );
}
