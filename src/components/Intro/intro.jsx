import React from "react";
import bg from "../../assets/gray-pic.jpg";

const Intro = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto mt-12" id="about">
        <div className="">
          {/* <img
            className="absolute  xs:invisible md:visible top-[200px] max-w-[1000px] xl:left-[-4px] xl:top-[220px] z-0"
            src={Rings}
            alt=""
          /> */}
        </div>
        <div
          className="flex xs:flex-col lg:flex-row-reverse justify-between items-center text-white px-8 mx-auto mb-16 z-20"
          style={{ margin: "4rem" }}
        >
          <div className="justify-start">
            <img
              className="flex rounded-lg flex-1 max-h-[400px] md:max-h-[550px] xl:max-h-[700px]"
              src={bg}
              alt="hero_image"
            />
          </div>

          <div className="max-w-[680px] text-center lg:text-left">
            <h1 className="xl:max-w-[680px] md:max-w-[445px] justify-start font-bold lg:text-[40px] xs:text-2xl mt-4 md:text-5xl xs:mb-4 tracking-[-1.14px] md:mb-12">
              Hello! I'm <br />{" "}
              <span className="underline underline-offset-[5px] decoration-[#1877F2] ">
                Kash Tare
              </span>
            </h1>
            <p className="max-w-[445px] font-medium text-lg mb-14">
              I'm a full stack software Engineer with experience in cloud native
              big data technologies. I have Masters in Computer Science from
              Northeastern University and have worked at Capital One, Amazon Web
              Services, and PwC.
              <br />
              <br />
              In my spare time, I love to experiment with data engineering
              projects. I am also an avid rock climber!
            </p>
            <a
              href="https://drive.google.com/file/d/1OHla7B0_XpBFrzDEvv6Ni6iE0btgBYIh/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <button
                className="bg-transparent
                      text-[#1877F2] font-semibold py-2 px-4 border bg-[#2b3945]
                      hover:border-transparent rounded
                      hover:text-white rounded transition duration-500 py-2 text-md text-white hover:bg-[#1877F2]"
                id="repo-button"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mx-8">
          <div className="bg-white h-[1px] max-w-8xl mb-16 mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Intro;
