import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { allLinks, allFunctions } from "./scripts";

const App = () => {
  return (
    <div className="parent-div ">
      <div className="contactpage-1679 pos-abs">
        {/* NavbarContactPage1 */}
        <section className="navbarcontactpa-1680 pos-abs">
          <div className="contacts-1681 pos-abs">
            <span className="contacts-1681-0">{`CONTACTS`}</span>
          </div>

          <div className="teiimann-1682 pos-abs">
            <span className="teiimann-1682-0">{`TEIIMANN`}</span>
          </div>

          <div className="contacts-1685 pos-abs">
            <span className="contacts-1685-0">{`CONTACTS `}</span>
          </div>

          <div className="projects-1683 pos-abs">
            <span className="projects-1683-0">{`PROJECTS `}</span>
          </div>

          <div className="tools-1684 pos-abs">
            <span className="tools-1684-0">{`TOOLS `}</span>
          </div>
        </section>
        {/* Img1 */}
        <section className="img-1840 pos-abs">
          <div className="contactimg-1694 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/ce5f/72b3/c295de3f6526bd74f8e1b84b0c88064b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AInD2NaW5BFOpKs2hVLm-taBuDyyWmj53t9pV1sB50BEz1sb-iwasH8JSKniEK19K86PEwpccJajrqs8NYr0ce6MV9QbgXcUkZDpuG1nOcZ4AbteuGM~2EaWgVfxFE2NcK3vyuSRgVSilwkrCcJhnDc7jdrOF0or2qhllvMgjzNQPLm-H4cH8lZzu3ViJ3FdtmyHRnos3m1N4RHdqHra8YiTsvq4lTqtJea0tBbcpDT8kz3liW~RNxcjX2CB~HH9giKQATznTherqPRh~mX85zMvxwJHN7OtUs9k0m56m0TZ~SRMC1O8BeS4AvQdERm0XlqiL16rNLhsCFNF48UD2w__"
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1694 "
              alt="1694-ALT"
            />{" "}
          </div>

          <div className="contactimg-1695 pos-abs">
            <img
              src="https://s3-alpha-sig.figma.com/img/ce5f/72b3/c295de3f6526bd74f8e1b84b0c88064b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AInD2NaW5BFOpKs2hVLm-taBuDyyWmj53t9pV1sB50BEz1sb-iwasH8JSKniEK19K86PEwpccJajrqs8NYr0ce6MV9QbgXcUkZDpuG1nOcZ4AbteuGM~2EaWgVfxFE2NcK3vyuSRgVSilwkrCcJhnDc7jdrOF0or2qhllvMgjzNQPLm-H4cH8lZzu3ViJ3FdtmyHRnos3m1N4RHdqHra8YiTsvq4lTqtJea0tBbcpDT8kz3liW~RNxcjX2CB~HH9giKQATznTherqPRh~mX85zMvxwJHN7OtUs9k0m56m0TZ~SRMC1O8BeS4AvQdERm0XlqiL16rNLhsCFNF48UD2w__"
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1695 "
              alt="1695-ALT"
            />{" "}
          </div>
        </section>
        {/* ContactMain1 */}
        <section className="contactmain-1842 pos-abs">
          <div className="basebox-1696 pos-abs"></div>

          <div className="media-1841 pos-abs">
            <div className="rectangle-2-1697 pos-abs"></div>

            <div className="linkicon-1-1698 pos-abs">
              <img
                src="https://s3-alpha-sig.figma.com/img/1fa5/ef83/46fc983fe967934e3da7de91851c0b35?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JPPUvyjOtJ4Fq~FWC2Pui8idEFraFv-16f~ZcVbN2V5vI~lTrtv3dJTcEL4QidKfvCewLOvpsaWex-63xE8Ap0mFelBuoCPyIezZeserAOvNBp0yvZq-s9VCvLI-4BNKArrfV0wVaL3zFAsqcM6o2nQI28CHLz28J2XuPhA94dylknvWAgyDeuC9ci86PJs7gZIQ3wNr1gPJc-P4pKXIqV2RjA74WpF0G9M8tJzdYSwXGLf1A6R-I4VAERUh5MnL8cpdsegGlkqH8caSd~by~VGhjxGQ9YFpulU3Hgwr5Ha4hmrfNQftcftVvehs9KDr9s6Z7FINjryPVKgwH6hopg__"
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1698 "
                alt="1698-ALT"
              />{" "}
            </div>

            <div className="teleicon-92 pos-abs">
              <img
                src="https://s3-alpha-sig.figma.com/img/0b71/031c/943a5f3f85b74e04f0417099bf982fa7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aqeAxh1JE4rgLCN7tawSIxpkdjZFyWekZ210Gh7ZwC6tbWXCY0wnhN4UzgDLc38ZZlg2-do6bhOFJ25299-MTzF5YLpcg0Zj4EvvmLYgUVNIzKGGBHUVKsAPm4btwTpZAA-i2vRGHop4~FRpwHzNHpRWUx6I3-fj8zkNHkTvxZAVbFHPSSBTtx8F4toRqDLL6xRr9iD43NM-qZ5gd~2QMvKDNq200Aq-sAZR3-v2Q8oj2g38RLCGQW~WFPlxrNpoK7FMQeJugIBWDS9kN~yz38WCNkUEx7H0adNZh8GFLBSn55znJAX6GwjSJn4NaDFU1rKzICZbnFAzmObHitzoQQ__"
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-92 "
                alt="92-ALT"
              />{" "}
            </div>

            <div className="insticon-814 pos-abs">
              <img
                src="https://s3-alpha-sig.figma.com/img/17e1/1bf2/0eb6b3354aa8ffe390c52c70a0179717?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aAj8~IqlkSOhdpkazI1xPwH9ZERFr239JGKHULpcGOhQv-5ICm4-EVeY4HZaw9RqslwE0Xs3aEr~-BOa4tyVH-mhw63pZxBWQ0MNQKn25fLFOuOPqGewfhqFyRgyBdmwGxTS3V8-R51QQDi4wH82slC-4fOxBSvBtiyy-FiMon26jewF17cYPAmcyvlBv4EKhi-~bpMDNpTtPbP-1WaNCq36EqRWsU1QHeSUL4mwEagbZly2i3NWHvwjAMjdDPUCwDumnapAiFxGOPiyTqjR5ypZN6P9MEFvvIEJ6DsNqCrLZwE0AVEik5q5VXXukFOA0d9uepCDToPZxtnQkWnKGA__"
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-814 "
                alt="814-ALT"
              />{" "}
            </div>

            <div className="giticon-86 pos-abs">
              <img
                src="https://s3-alpha-sig.figma.com/img/d0be/e688/b066812b8f366c583612511ffaa9a252?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KWXKUj0ZCCRU6EKbPAp4rJh54IK9CEXODtzE4Vg454PvqnWyMgcYEhbX44EeZY49PDbjpZEYNkv4DNj3XbcEkJB2O9tUhKFHrdUbxq2pZkjDZ5WAEW0pdfz4R6XknwKO0l27SKGjdfPuiLmHuCp13xDT6zWj8ruRJEB0jbhs51UwjwL8A8RFQN~YtAvYP6e3dLcjOUcVz3RMe-prbDaJ7Cq3dUc6j081LuKtH6WRyO0nFoBkn9jNAlfwI8pTx4bhtsTWtHXLjp5E-08bCNFexUiiqcyXbXUqHCNYpPWnEdpRxUv2y3sINe3ZSRNdHB-I8i9aUxmTZm1udpugvmI~LA__"
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-86 "
                alt="86-ALT"
              />{" "}
            </div>
          </div>

          <div className="name-1845 pos-abs">
            <div className="namebox-16100 pos-abs"></div>

            <div className="name-16101 pos-abs">
              <span className="name-16101-0">{`Name...`}</span>
            </div>
          </div>

          <div className="email-1844 pos-abs">
            <div className="emailbox-16105 pos-abs"></div>

            <div className="email-16103 pos-abs">
              <span className="email-16103-0">{`Email...`}</span>
            </div>
          </div>

          <div className="message-1843 pos-abs">
            <div className="messagebox-16106 pos-abs"></div>

            <div className="message-16107 pos-abs">
              <span className="message-16107-0">{`Message...`}</span>
            </div>
          </div>

          <div className="button-1846 pos-abs">
            <div className="buttombox-16108 pos-abs"></div>

            <div className="buttontext-16111 pos-abs">
              <span className="buttontext-16111-0">{`Send Message`}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);

/*
@import url("https://fonts.googleapis.com/css2?family=Paytone+One:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jersey+25:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
:root {
  --custom-width: 100vw;
  --design-width: 1920;
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
  height: calc(1080 * var(--ratio));
  overflow: hidden;
  margin: auto;
  padding: 0px;
  box-sizing: border-box;
}
.contactpage-1679 {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 1;
  transform: rotate(0deg);
  overflow: hidden;
  background: #000000ff;
}
.navbarcontactpa-1680 {
  width: 97.97%;
  height: 42.31%;
  top: -9.35%;
  left: -2.19%;
  z-index: 0;
  transform: rotate(0deg);
}
.contacts-1681 {
  width: 87.14%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.contacts-1681-0 {
  font-size: calc(300 * var(--ratio));
  letter-spacing: calc(-6.6000001430511475 * var(--ratio));
  line-height: calc(450 * var(--ratio));

  font-family: Paytone One;
  font-weight: 400;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #ffffffff;
}
.teiimann-1682 {
  width: 15.2%;
  height: 15.62%;
  top: 31.07%;
  left: 84.8%;
  z-index: 1;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
  box-sizing: border-box;
  -webkit-text-stroke: 1px #000000ff;
  -webkit-background-clip: text;
  background-clip: text;
}
.teiimann-1682-0 {
  font-size: calc(50 * var(--ratio));
  letter-spacing: calc(-1.100000023841858 * var(--ratio));
  line-height: calc(75 * var(--ratio));

  font-family: Inter;
  font-weight: 800;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #c8c8c8ff;
}
.contacts-1685 {
  width: 7.85%;
  height: 9.37%;
  top: 46.69%;
  left: 85.92%;
  z-index: 4;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.contacts-1685-0,
.projects-1683-0,
.tools-1684-0 {
  font-size: calc(35 * var(--ratio));
  letter-spacing: calc(-0.7700000166893005 * var(--ratio));
  line-height: calc(52.5 * var(--ratio));

  font-family: Jersey 25;
  font-weight: 400;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #c8c8c8ff;
}
.projects-1683 {
  width: 7.64%;
  height: 9.37%;
  top: 56.06%;
  left: 86.13%;
  z-index: 2;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.tools-1684 {
  width: 4.7%;
  height: 9.37%;
  top: 65.43%;
  left: 86.13%;
  z-index: 3;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.img-1840 {
  width: 107.4%;
  height: 69.26%;
  top: 26.11%;
  left: -3.96%;
  z-index: 1;
  transform: rotate(0deg);
}
.nodeBg-1694,
.nodeBg-1695 {
  background-position: center;
  background-repeat: no-repeat;
  width: calc(653.1454711539296 * var(--ratio));
  height: calc(301.8953411210917 * var(--ratio));
  left: calc(-2.896107669920454e-13 * var(--ratio));
  top: calc(-47.93023339231441 * var(--ratio));
  object-fit: cover;
  opacity: 1;
}
.contactimg-1694 {
  width: 23.67%;
  height: 30.61%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  overflow: hidden;
}
.contactimg-1695 {
  width: 23.67%;
  height: 30.61%;
  top: 69.39%;
  left: 76.33%;
  z-index: 1;
  transform: rotate(180deg);
  overflow: hidden;
}
.contactmain-1842 {
  width: 54.06%;
  height: 63.06%;
  top: 30.46%;
  left: 22.97%;
  z-index: 2;
  transform: rotate(0deg);
}
.basebox-1696 {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  border-radius: 75px;
  background: #000000ff;
  box-sizing: border-box;
  border-left: 10px solid #878787ff;
  border-right: 10px solid #878787ff;
  border-top: 10px solid #878787ff;
  border-bottom: 10px solid #878787ff;
}
.media-1841 {
  width: 16.28%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 1;
  transform: rotate(0deg);
}
.rectangle-2-1697 {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  border-radius: 75px 0;
  background: #ffffffff;
  box-sizing: border-box;
  border-left: 10px solid #878787ff;
  border-right: 10px solid #878787ff;
  border-top: 10px solid #878787ff;
  border-bottom: 10px solid #878787ff;
}
.nodeBg-1698,
.nodeBg-92,
.nodeBg-814,
.nodeBg-86 {
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  opacity: 1;
}
.linkicon-1-1698 {
  width: 59.17%;
  height: 14.68%;
  top: 9.99%;
  left: 20.12%;
  z-index: 1;
  transform: rotate(0deg);
  overflow: hidden;
}
.teleicon-92 {
  width: 59.17%;
  height: 14.68%;
  top: 30.69%;
  left: 20.12%;
  z-index: 3;
  transform: rotate(0deg);
  overflow: hidden;
}
.insticon-814 {
  width: 59.17%;
  height: 14.68%;
  top: 53.01%;
  left: 20.12%;
  z-index: 2;
  transform: rotate(0deg);
  overflow: hidden;
}
.giticon-86 {
  width: 59.17%;
  height: 14.68%;
  top: 75.18%;
  left: 20.12%;
  z-index: 4;
  transform: rotate(0deg);
  overflow: hidden;
}
.name-1845 {
  width: 59.15%;
  height: 13.07%;
  top: 13.66%;
  left: 25.72%;
  z-index: 2;
  transform: rotate(0deg);
}
.namebox-16100,
.emailbox-16105,
.messagebox-16106 {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  border-radius: 25px;
  background: #000000ff;
  box-sizing: border-box;
  border-left: 5px solid #ffffffff;
  border-right: 5px solid #ffffffff;
  border-top: 5px solid #ffffffff;
  border-bottom: 5px solid #ffffffff;
}
.name-16101 {
  width: 22.64%;
  height: 77.53%;
  top: 22.47%;
  left: 2.44%;
  z-index: 1;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.name-16101-0,
.email-16103-0,
.message-16107-0,
.buttontext-16111-0 {
  font-size: calc(30 * var(--ratio));
  letter-spacing: calc(-0.6600000143051148 * var(--ratio));
  line-height: calc(45 * var(--ratio));

  font-family: Inter;
  font-weight: 800;

  text-decoration: none;
  text-transform: none;
  white-space: pre-wrap;
  color: #ffffffff;
}
.email-1844 {
  width: 59.15%;
  height: 13.07%;
  top: 30.69%;
  left: 25.72%;
  z-index: 3;
  transform: rotate(0deg);
}
.email-16103 {
  width: 16.94%;
  height: 50.56%;
  top: 24.72%;
  left: 5.21%;
  z-index: 1;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.message-1843 {
  width: 59.15%;
  height: 30.69%;
  top: 46.4%;
  left: 25.72%;
  z-index: 4;
  transform: rotate(0deg);
}
.message-16107 {
  width: 25.57%;
  height: 21.53%;
  top: 10.53%;
  left: 5.21%;
  z-index: 1;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
.button-1846 {
  width: 25.82%;
  height: 8.81%;
  top: 81.06%;
  left: 58.29%;
  z-index: 5;
  transform: rotate(0deg);
}
.buttombox-16108 {
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 0;
  transform: rotate(0deg);
  border-radius: 25px;
  background: #8b8b8bff;
}
.buttontext-16111 {
  width: 78.73%;
  height: 75%;
  top: 11.67%;
  left: 12.31%;
  z-index: 1;
  transform: rotate(0deg);
  text-align: center;
  line-height: 0px;
}
 */