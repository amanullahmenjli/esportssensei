import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import AboutUs from "../components/AboutUs";
import CoachesDescription from "../components/CoachesDescription";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FrameComponent1 from "../components/FrameComponent1";
import IndividualTestimonial from "../components/IndividualTestimonial";
import FrameComponent from "../components/FrameComponent";

const Slide169: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background overflow-y-auto flex flex-col items-end justify-start pt-0 px-0 pb-[441px] box-border gap-[39px] leading-[normal] tracking-[normal] mq925:gap-[19px]">
      <div className="w-[394px] h-[1717px] relative [filter:blur(250px)] rounded-[50%] bg-crimson-200 shrink-0 [transform:_rotate(-90deg)] hidden opacity-[0.6] max-w-full z-[0]" />
      <FrameComponent3 />
      <AboutUs />
      <div className="w-[295px] h-[3px] relative box-border shrink-0 hidden z-[3] border-t-[3px] border-solid border-white" />
      <div className="w-[295px] h-[3px] relative box-border shrink-0 hidden z-[4] border-t-[3px] border-solid border-white" />
      <div className="w-[295px] h-[3px] relative box-border shrink-0 hidden z-[5] border-t-[3px] border-solid border-white" />
      <div className="w-[295px] h-[3px] relative box-border shrink-0 hidden z-[6] border-t-[3px] border-solid border-white" />
      <div className="w-[295px] h-[3px] relative box-border shrink-0 hidden z-[7] border-t-[3px] border-solid border-white" />
      <section className="w-full h-[2272.6px] absolute !m-[0] top-[727.2px] right-[0px] left-[0px] shrink-0">
        <div className="absolute top-[2272.63px] left-[1307.83px] [filter:blur(450px)] rounded-[50%] bg-crimson-500 w-[1519.4px] h-[1827.6px] [transform:_rotate(-157.3deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[21.8px] left-[-301.8px] max-h-full w-[2833.5px] overflow-hidden object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/frame-11@2x.png"
        />
        <img
          className="absolute top-[434.8px] left-[1918px] w-[37px] h-[37px] z-[1]"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="absolute top-[435.8px] left-[275px] w-[37px] h-[37px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="absolute top-[1196.8px] left-[1447.9px] w-[488.3px] h-[410px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/28991012-m502t0009-08jun22-spaceship-01-1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[227px] box-border max-w-full text-center text-45xl text-light font-section-title mq925:pb-[62px] mq925:box-border mq1400:pb-24 mq1400:box-border">
        <div className="w-[1918px] flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
            <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-19xl mq925:text-32xl">
              Our top coaches
            </h1>
          </div>
          <CoachesDescription />
          <Features />
        </div>
      </section>
      <Testimonials />
      <img
        className="w-[1743px] h-px absolute !m-[0] bottom-[1332px] left-[-158px] shrink-0 z-[2]"
        loading="lazy"
        alt=""
        src="/line-9.svg"
      />
      <FrameComponent1 />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <IndividualTestimonial />
        <FrameComponent />
      </section>
    </div>
  );
};

export default Slide169;
