import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import "./experience.css"
import pwcLogo from "../../assets/pwc-logo.png";
import incyreeLogo from "../../assets/incyree-logo.png";
import awsLogo from "../../assets/aws-logo.png";
import energySageLogo from "../../assets/energysage-logo.png";
import capital1Logo from "../../assets/cap1-logo.png";

const Timeline = () => {
  return (
    <div className="p-4 mt-4" id="experience">
      <h1 class="text-4xl text-center font-bold mb-6 text-white underline underline-offset-[5px] decoration-[#1877F2]">
        Experience
      </h1>
      <section className="max-w-6xl mx-auto mt-12 mb-16">
        <VerticalTimeline lineColor="#1877F2">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="January 2024 — Present"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={
              <a
                href="https://www.pwc.com/us/en.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={pwcLogo}
                  alt="PwC Logo"
                  style={{ height: "3rem", padding: ".5rem .5rem 0rem .5rem" }}
                ></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Data Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              PwC
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Boston, MA
            </h4>
            <p className="text-[#bcbdc2]">
              Focusing on ETL processes, data integration, and data
              normalization to modernize the payment intiation platform known as
              Payment Hub at State Street.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="May 2023 — December 2023"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={
              <img
                src={incyreeLogo}
                alt="PwC Logo"
                style={{ height: "3rem", padding: ".5rem .5rem 0rem .5rem" }}
              ></img>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              FullStack Software Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              Incyree Inc.
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Skillman, NJ
            </h4>
            <p className="text-[#bcbdc2]">
              Contributing to the development and deployment of a social media
              website that helps users share their expertise to solve problems
              and earn rewards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="September 2022 — December 2022"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={awsLogo}
                  alt="AWS Logo"
                  style={{ height: "3rem", padding: ".7rem .5rem 0rem .5rem" }}
                ></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Software Development Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              Amazon Web Services
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Boston, MA
            </h4>
            <p className="text-[#bcbdc2]">
              Part of the team responsible for maintaining the secure data
              migrations service, onboarded to a cloud based application
              configuration utility.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="June 2022 — September 2022"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={
              <a
                href="https://www.energysage.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={energySageLogo}
                  alt="EnergySage Logo"
                  style={{ height: "3rem", padding: ".5rem .5rem 0rem .5rem" }}
                ></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Software Development Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              EnergySage
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Boston, MA
            </h4>
            <p className="text-[#bcbdc2]">
              Part of the platform team focused on infrastructure provisioning,
              configuration, and maintenance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="June 2019 — April 2021"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={
              <a
                href="https://www.capitalone.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={capital1Logo}
                  alt="EnergySage Logo"
                  style={{ height: "3rem", padding: ".5rem 0rem 0rem 0rem" }}
                ></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Software Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              Capital One
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Henrico, VA
            </h4>
            <p className="text-[#bcbdc2]">
              Member of the payments teams responsible for processing and
              reconciling 2 million files a day..
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Timeline;
