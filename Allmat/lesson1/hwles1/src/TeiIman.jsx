import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { allLinks, allFunctions } from "./scripts";

const App = () => {
  return (
    <div className="parent-div ">
      <div className="mainpage-96 pos-abs">
        <img
          src="https://s3-alpha-sig.figma.com/img/f4b4/300b/d2aae65a34b070b9c506c13607000834?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a7DkfXAkulx0tPP1eRBd~ACMs9tjAz2HGJe15--RTWWSKaA3tYNgKTIMnC~2lXHoALCGMXvCg2J-VsllywhwOI3dVpAMeYZ8a4tFapUAG1OU1PRYjWsaeXRkLUYlJ-U~M6xdcFvkK5knzZlwS3hyaJdOrtG~pmMltbJ7ugTt6FiSwGL-kuMOAuaKEu766uiKSIq9SSYIQ4ZkixU~SG5LmNryvzLimvwHGyfdBPXRqO-Sru6Ui7mL3a74Cg-jRE0puso-8Sk-HZcrWr7GPz5-TKEUl~pjbWVWp8kSiYZlk57eQ8X8mlci~YpVfeFtUN3SR9qpXaiJ33BYA0lnMb8FZg__"
          className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-96 "
          alt="96-ALT"
        />
        {/* NavbarMainPage1 */}
        <section className="navbarmainpage-818 pos-abs">
          <div className="teiimann-88 pos-abs">
            <span className="teiimann-88-0">{`TEIIMANN`}</span>
          </div>

          <div className="portfolio-89 pos-abs">
            <span className="portfolio-89-0">{`PORTFOLIO`}</span>
          </div>

          <div className="about-810 pos-abs">
            <span className="about-810-0">{`ABOUT `}</span>
          </div>

          <div className="projects-811 pos-abs">
            <span className="projects-811-0">{`PROJECTS `}</span>
          </div>

          <div className="contacts-813 pos-abs">
            <span className="contacts-813-0">{`CONTACTS `}</span>
          </div>

          <div className="tools-812 pos-abs">
            <span className="tools-812-0">{`TOOLS `}</span>
          </div>
        </section>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);

/*
@import url("https://fonts.googleapis.com/css2?family=Paytone+One:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jersey+25:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
:root {
  --custom-width: 100vw;
  --design-width: 1380;
  --ratio: calc(var(--custom-width) / var(--design-width));
}


.pos-abs {
  position: absolute;
}
.fill-parent {
  width: 100%;
  height: 100%;
}
.bg-contain {
  background-size: contain;
}
.bg-cover {
  background-size: cover;
}
.bg-auto {
  background-size: auto;
}
.bg-crop {
  background-size: 100% 100%;
}
.bg-no-repeat {
  background-repeat: no-repeat;
}
.pos-init {
  top: 0px;
  left: 0px;
}
.image-div {
  background-color: transparent;
  background-position: center;
}


body {
  margin: 0px 0px;
  padding: 0px;
}
.parent-div {
  position: relative;
  width: var(--custom-width);
  height: calc(768 * var(--ratio));
  overflow: hidden;
  margin: auto;
  padding: 0px;
  box-sizing: border-box;
}
.nodeBg-96 {
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  opacity: 1;
}
.mainpage-96 {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 1;
  transform: rotate(0deg);
  overflow: hidden;
}
.navbarmainpage-818 {
  width: 91.45%;
  height: 33.33%;
  top: 0%;
  left: 2.9%;
  z-index: 0;
  transform: rotate(0deg);
}
.teiimann-88 {
  width: 86.45%;
  height: 73.89%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.teiimann-88-0 {
  font-size: calc(225 * var(--ratio));
  letter-spacing: calc(-4.950000107288361 * var(--ratio));
  line-height: calc(337.5 * var(--ratio));

  font-family: Paytone One;
  font-weight: 400;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #ffffffff;
}
.portfolio-89 {
  width: 13.8%;
  height: 16.84%;
  top: 10.95%;
  left: 86.2%;
  z-index: 5;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.portfolio-89-0 {
  font-size: calc(30 * var(--ratio));
  letter-spacing: calc(-0.6600000143051148 * var(--ratio));
  line-height: calc(45 * var(--ratio));

  font-family: Inter;
  font-weight: 800;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #c8c8c8ff;
}
.about-810 {
  width: 6.48%;
  height: 14.84%;
  top: 84.49%;
  left: 8.67%;
  z-index: 1;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.about-810-0,
.projects-811-0,
.contacts-813-0,
.tools-812-0 {
  font-size: calc(20 * var(--ratio));
  letter-spacing: calc(-0.4400000095367432 * var(--ratio));
  line-height: calc(30 * var(--ratio));

  font-family: Jersey 25;
  font-weight: 400;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #c8c8c8ff;
}
.projects-811 {
  width: 10.32%;
  height: 14.84%;
  top: 84.82%;
  left: 15.18%;
  z-index: 2;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.contacts-813 {
  width: 10.59%;
  height: 14.84%;
  top: 84.82%;
  left: 30.84%;
  z-index: 4;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.tools-812 {
  width: 6.39%;
  height: 14.84%;
  top: 85.16%;
  left: 24.42%;
  z-index: 3;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}

*/