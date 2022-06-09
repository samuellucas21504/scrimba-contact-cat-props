import React from "react";
import Contact from "./Contact"
import "./style.css";
import mrWhiskerson from "../../images/mr-whiskerson.png"
import flufflykins from "../../images/fluffykins.png"
import pumpkin from "../../images/pumpkin.png"
import felix from "../../images/felix.png"

export default function Contacts() {
  return (
    <div className="contacts">
      <Contact
        img={mrWhiskerson}
        name="Mr. Whiskerson"
        phoneNumber="(212) 555-1234"
        emailAddress="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={flufflykins}
        name="Fluffykins"
        phoneNumber="(212) 555-2345"
        emailAddress="fluff@me.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phoneNumber="(0800) CAT KING"
        emailAddress="pumpkin@scrimba.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phoneNumber="(212) 555-4567"
        emailAddress="thecat@hotmail.com"
      />
    </div>
  );
}
