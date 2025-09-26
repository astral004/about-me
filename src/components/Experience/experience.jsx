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
import ukgLogo from "../../assets/ukg-logo.png"

const Timeline = () => {
  return (
    <div className="p-4 mt-4" id="experience">
      <h1 class="text-4xl text-center font-bold mb-6 text-white underline underline-offset-[5px] decoration-[#1877F2]">
        Experience
      </h1>
      <section className="max-w-6xl mx-auto mt-12 mb-16">
        <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="March 2024 — Present"
            iconStyle={{ background: "white", color: "#fff" }}
            icon={
              <a
                href="https://www.ukg.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ukgLogo}
                  alt="UKG Logo"
                ></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Software Development Engineer II
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              UKG
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Boston, MA
            </h4>
            <p className="text-[#bcbdc2]">
              Built a low-latency event-driven system (sub-5s latency) 
              to process change data capture (CDC) events, 
              enrich with entity data, and publish to Kafka for 
              downstream analytics and insight generation. <br/>
              •	Implemented GCP Datastream multisharding of up to 5 real time streams per customer to reduce data staleness from 4 hours to 30 seconds to enable faster insight generation for customers and Business Analytics teams <br/>
              •	Leveraged GCP Dataflow to consume events from a single Kafka topic, enrich each event with information from the full record, and publish downstream to multiple domain specific Kafka topics

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="January 2024 — March 2024"
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
              Payment Hub at State Street. <br/>
              •	Developed and maintained ETL processes to integrate more than 1,000,000 records into the new database, ensuring data accuracy and consistency <br/>
              •	Implemented data validation and transformation logic using Python and Pandas to mitigate data loss during migration and reduce transformation time by 70%

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
                alt="Incyree Logo"
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
              and earn rewards.<br/>
              •	Integrated Stripe payment services using TypeScript, JavaScript, MongoDB, and webhook ingestion to seamlessly facilitate payments and provide payouts to users with a cloud-native API-first approach.<br/>
              •	Designed and provisioned 4-tier distributed infrastructure required for hosting the website on AWS. This included setting up EC2 servers, DNS routing using Route53, multiple firewalls using Security Groups, load balancing via ALBs, and a nginx reverse proxy to establish a cloud based production environment.

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
              configuration utility.<br/>
              •	Provided pipeline configuration details to define the one-box stage, the dev deployment stage, and the prod deployment stage in multiple regions of the AWS content delivery network to onboard Datasync to AWS AppConfig.<br/>
              •	Integration of a throttling utility with AWS AppConfig to be able to dynamically update API throttling limits to prevent bottlenecking and denial-of-service.

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
              configuration, and maintenance.<br/>
              • Worked with the AWS CDK to automate infrastructure releases to phase out manual deployments and reduce manual engineering labor.<br/>
              • Developed an AWS Lambda responsible for auto-rollbacks when Datadog’s API reported an excessive number of errors.<br/>
              • Deployed an S3 based static frontend using the AWS CDK as part of a prototype.
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
                  alt="Capital One Logo"
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
              reconciling 2 million files a day.<br/>
              •	Performed an ETL of 3,000,000 records from a legacy system into Cassandra database to be able to check if Bank Routing numbers need to be swapped to reduce fees incurred by NOCs by 80%.<br/>
              •	Engineered an Apache Spark driven application to query Cassandra for a set of 45,000 files and confirm they were processed to automate the end-of-day payment posting which saved 3 hours of manual work every night.<br/>
              •	Experienced in writing integration tests with automated test-driven development using Java/Cucumber and unit tests using Jacoco plugin integrated with SonarQube.

            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Timeline;
