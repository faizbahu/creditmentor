import React, { useState, useRef, useEffect } from "react";
function Banner() {
  return (
    <>
      <div className="hero-content container">
        <h1 className="smart-choice">
          The Smart Choice for{" "}
          <span style={{ color: "#6163FF" }} className="text-color-primary">
            Credit Repair
          </span>
        </h1>
        <div className="container-xs">
          <h3 className="premium">
            “Premium 1 on 1 Credit Repair and Credit Building Coaching
          </h3>
          <p className="unparalleled">
            Unparalleled, IT Support for organizations of all sizes. We custom
            tailor our services around your business, your needs, your people,
            your workflows.Start to finish we treat our customers as an
            extension of our business.Our custom pricing model makes it so
            everyone can afford our services. From a one person business owner
            to an healthcare providers with complex business requirements.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
