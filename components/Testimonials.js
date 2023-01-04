import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import image1 from "../images/features-split-image-01.png";
function Testimonials() {
  return (
    <>
      <div className="splitting"></div>
      <div className="features-split-inner container">
        <h3 className="premium">Truly Delivering value</h3>
        <p className="unparalleled-2">
          We show the value we give out by ensuring you can do what you do best
          which is build your business and leave all the tech to us.
        </p>
      </div>
      <div className="testimonials container">
        <div className="displaying">
          <div>
            <h3 className="enterprise">Enterprise Open Source Solutions</h3>
            <p className="unparalleled">
              Selecting the right open source to power your business is no easy
              task. With years of experience in the open source world, Alpha
              Star Tech can help choice with open source is right for your
              business.
            </p>
            <button className="learn">Learn More</button>
          </div>
          <div className="">
            <Image className="testimonials-image" src={image1} width={528} />
          </div>
        </div>
        <div className="displaying extended">
          <div>
            <h3 className="enterprise">
              No matter what market you are in, IT support is a call away
            </h3>
            <p className="unparalleled">
              From day traders, stock brokers, real estate brokerage firms and
              many other industries, we at Alpha Star Tech understand the
              importance of always having your IT systems working for you. Which
              is why we invest in monitoring solutions to know when and if a
              problem is about to occur or is occurring so we can act quickly
              and reduce downtime.
            </p>
            <button className="learn">Learn More</button>
          </div>
          <div className="">
            <Image className="testimonials-image" src={image1} width={528} />
          </div>
        </div>
        <div className="displaying ">
          <div>
            <h3 className="enterprise">
              HIPAA Compliant IT Solutions for Healthcare & Medical Industry
            </h3>
            <p className="unparalleled">
              Your IT receiving should provide with you the same level of care
              that you give to your patients, but it is? One of Alpha Star Tech
              core values is to treat every client as we would treat our own
              company, with care and respect. We understand that your pratice
              completely dedicated your staff to your patients’ health and
              well-being needs. And we dedicated ourselves to ensuring you have
              the technology in place to continue that support. From EHR
              software such as eClinicalWorks, Epic, Allscripts, Praxis EMR,
              athenalhealth, CureMD, GE Healthcare, PracticeFusion, Kareo, we
              help manage, support, integrate and train your practice on these
              tools so can get back to caring for your patients.
            </p>
            <button className="learn">Learn More</button>
          </div>
          <div className="">
            <Image className="testimonials-image" src={image1} width={528} />
          </div>
        </div>
      </div>
      <div className="splitting"></div>
    </>
  );
}

export default Testimonials;
