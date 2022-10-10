import React from "react";
import {AiFillInstagram ,AiFillLinkedin} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project5.png";

const Project = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="project_header">
          <div className="project_title">
            <div className="project_headerTitle"> Project's team</div>
            <p>
              Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim veniam
              lorem ipsum dolor.Sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <a href="!" className="project_btn">
            Join our team
            <svg
              width="52"
              height="47"
              viewBox="0 0 52 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M32.5599 12.0346L32.5506 30.7356C32.5506 31.6066 31.8279 32.3201 30.9476 32.3201H1.60258C0.722351 32.3201 -0.000366211 31.6066 -0.000366211 30.7356V1.58442C-0.000366211 0.713452 0.722351 0 1.60258 0H21.1954C22.0756 0 22.7984 0.713452 22.7984 1.58442V6.27763C22.7984 8.0381 24.1604 9.4372 25.9579 9.4372H30.9569C31.8371 9.4372 32.5599 10.1507 32.5599 11.0216V12.0346Z"
                fill="#2C2C2C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.657 24.274C31.5777 24.2284 31.5163 24.1657 31.4673 24.0954C29.6768 22.7946 27.4826 22.0167 25.1005 22.0167C19.1018 22.0167 14.2391 26.8795 14.2391 32.8781C14.2391 33.0179 14.2483 33.1553 14.2576 33.2927C14.2618 33.3556 14.266 33.4185 14.2694 33.4816H14.2391C14.2391 33.8149 13.9689 34.0851 13.6356 34.0851C13.3027 34.0847 13.0325 33.8145 13.0325 33.4812C13.0325 33.4517 13.0399 33.4248 13.0473 33.3979L13.0473 33.3979C13.0507 33.3855 13.0541 33.3732 13.0568 33.3605C13.0546 33.3263 13.0522 33.292 13.0498 33.2578L13.0498 33.2577C13.0412 33.1319 13.0325 33.006 13.0325 32.8781C13.0325 27.2558 16.8829 22.5452 22.0867 21.2048C20.2829 20.1614 19.0665 18.2161 19.0665 15.9827C19.0665 12.6501 21.7678 9.94873 25.1005 9.94873C28.4331 9.94873 31.1344 12.6501 31.1344 15.9827C31.1344 18.2161 29.918 20.1614 28.1143 21.2048C29.6729 21.6063 31.1063 22.3155 32.3547 23.2553C32.3492 23.2602 32.3443 23.2658 32.3394 23.2714C32.3349 23.2765 32.3304 23.2817 32.3253 23.2864C32.5559 23.4693 32.6326 23.7906 32.4809 24.0532C32.3146 24.3417 31.9455 24.4406 31.657 24.274ZM46.9991 39.5627H40.9994V45.9373C40.9994 46.5242 40.5516 47 39.9993 47C39.4469 47 38.9991 46.5242 38.9991 45.9373V39.5627H32.9994C32.4471 39.5627 31.9993 39.0869 31.9993 38.5C31.9993 37.9131 32.4471 37.4373 32.9994 37.4373H38.9991V31.0627C38.9991 30.4758 39.4469 30 39.9993 30C40.5516 30 40.9994 30.4758 40.9994 31.0627V37.4373H46.9991C47.5514 37.4373 47.9993 37.9131 47.9993 38.5C47.9986 39.0876 47.5507 39.5627 46.9991 39.5627ZM25.1004 11.1554C27.7664 11.1554 29.9278 13.3168 29.9278 15.9828C29.9278 18.6488 27.7664 20.8101 25.1004 20.8101C22.4344 20.8101 20.2731 18.6488 20.2731 15.9828C20.2731 13.3168 22.4344 11.1554 25.1004 11.1554Z"
                fill="#2C2C2C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.7716 4.68792L40.1889 12.0404C40.4669 12.3276 40.6244 12.7075 40.6336 13.0874L40.615 27.3428H38.8121L38.8179 17.0531C38.8179 16.1822 38.0952 15.4687 37.2149 15.4687H32.216C30.4184 15.4687 29.0564 14.0696 29.0564 12.3092V7.61595C29.0564 6.74498 28.3337 6.03153 27.4534 6.03153H7.86061C6.98038 6.03153 6.25767 6.74498 6.25767 7.61595V36.7672C6.25767 37.6381 6.98038 38.3516 7.86061 38.3516H29.4244V40.2231H7.38776C5.76628 40.2231 4.45056 38.9074 4.45056 37.2859V7.18964C4.45056 5.56816 5.75701 4.25244 7.38776 4.25244H31.7246C32.1137 4.25244 32.4936 4.40996 32.7716 4.68792ZM38.3825 13.0688L31.5211 6.21669C31.2432 5.92946 30.7521 6.12404 30.7521 6.53172V12.0218C30.7521 13.0225 31.5674 13.8378 32.5681 13.8378H38.0675C38.4659 13.8378 38.6697 13.356 38.3825 13.0688Z"
                fill="#2C2C2C"
              />
            </svg>
          </a>
        </div>

        <div className="project_dev">
            <div className="box">
                <img src={project1} alt="" />
                <div className="dev_title">
                    <h3>Pieter Omvlee</h3>
                    <p>Designer</p>
                    <div className="social">
                        <FaTelegram />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                    </div>
                </div>
            </div>
            <div className="box">
                <img src={project2} alt="" />
                <div className="dev_title">
                    <h3>Pieter Omvlee</h3>
                    <p>Designer</p>
                    <div className="social">
                        <FaTelegram />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                    </div>
                </div>
            </div>
            <div className="box">
                <img src={project3} alt="" />
                <div className="dev_title">
                    <h3>Pieter Omvlee</h3>
                    <p>Designer</p>
                    <div className="social">
                        <FaTelegram />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                    </div>
                </div>
            </div>
            <div className="box">
                <img src={project4} alt="" />
                <div className="dev_title">
                    <h3>Pieter Omvlee</h3>
                    <p>Designer</p>
                    <div className="social">
                        <FaTelegram />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
