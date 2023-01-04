import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
function Banner_3() {
  return (
    <>
      <div className="records">
        <h3 className="premium">We are IT Hero to</h3>
        <p className="unparalleled-2">Hundreds of customers nationwide</p>
      </div>
      <div className="for-flexing">
        <div className="tiles-wrap-2">
          <div className="before-element"></div>
          <p className="customers-1">400+</p>
          <p className="customers-2">Happy Customers</p>
        </div>
        <div className="tiles-wrap-2">
          <div className="before-element"></div>
          <p className="customers-1">10+</p>
          <p className="customers-2">Skilled Employees</p>
        </div>
        <div className="tiles-wrap-2">
          <div className="before-element"></div>
          <p className="customers-1">500+</p>
          <p className="customers-2">Projects Completed</p>
        </div>
      </div>
    </>
  );
}

export default Banner_3;
