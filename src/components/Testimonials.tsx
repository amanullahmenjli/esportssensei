import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

const Testimonials: FunctionComponent = () => {
  return (
    <section className="w-[1939px] flex flex-col items-end justify-start pt-0 pb-[35px] pr-0 pl-5 box-border max-w-full text-center text-xl text-crimson-200 font-section-title">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="w-[1870px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq1875:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[7px] min-w-[400px] max-w-full mq925:min-w-full mq1875:flex-1">
            <b className="relative mq450:text-base">WALL OF LOVE</b>
            <h1 className="m-0 relative text-45xl font-bold font-inherit text-light text-left mq450:text-19xl mq925:text-32xl">
              <p className="m-0">Words from</p>
              <p className="m-0">our clients</p>
            </h1>
          </div>
          <div className="w-[1152px] flex flex-row items-start justify-start relative min-w-[1152px] max-w-full text-left text-29xl text-light font-archivo mq1400:min-w-full mq1875:flex-1">
            <div className="h-[2300px] w-px absolute !m-[0] right-[575px] bottom-[-1638px] box-border z-[1] border-r-[1px] border-solid border-border" />
            <div className="flex-1 flex flex-row items-start justify-start gap-[64px] max-w-full mq925:gap-[16px] mq1400:flex-wrap mq1400:gap-[32px]">
              <FrameComponent2
                iDoubledUpMyMMRStartedAsA="I doubled up my MMR, started as a crusader… I highly recommend coaching with Gamer Sensei."
                group2347="/group-2347.svg"
                alexWi="Alex Wi"
                alexWi1="@alex_wi"
              />
              <FrameComponent2
                iDoubledUpMyMMRStartedAsA="I went from Champion 3 to 1800 [in Rocket League] in the course of a year."
                group2347="/group-2347-1.svg"
                alexWi="Jordan Dueley"
                alexWi1="@JordanDueley"
                propHeight="unset"
                propDisplay="unset"
                propDisplay1="unset"
                propMinWidth="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[645px] relative max-h-full max-w-full z-[2]"
        loading="lazy"
        alt=""
        src="/line-8.svg"
      />
    </section>
  );
};

export default Testimonials;
