import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start gap-[74px] max-w-full mq450:gap-[18px] mq925:gap-[37px]">
      <div className="w-[1866px] flex flex-row items-start justify-end py-0 px-[645px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq925:pl-[161px] mq925:pr-[161px] mq925:box-border mq1400:pl-[322px] mq1400:pr-[322px] mq1400:box-border">
        <img
          className="w-[1606px] relative max-h-full max-w-[279%] shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/line-7.svg"
        />
      </div>
      <div className="w-[1241px] flex flex-col items-end justify-start py-0 pr-0 pl-5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[1172px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[64px] max-w-full mq925:gap-[16px] mq1400:gap-[32px]">
            <FrameComponent2
              iDoubledUpMyMMRStartedAsA="I doubled up my MMR, started as a crusader… I highly recommend coaching with Gamer Sensei."
              group2347="/group-2347-2.svg"
              alexWi="Alex Wi"
              alexWi1="@alex_wi"
              propHeight="44px"
              propDisplay="inline-block"
              propDisplay1="inline-block"
              propMinWidth="90px"
            />
            <FrameComponent2
              iDoubledUpMyMMRStartedAsA="I went from Champion 3 to 1800 [in Rocket League] in the course of a year."
              group2347="/group-2347-3.svg"
              alexWi="Jordan Dueley"
              alexWi1="@JordanDueley"
              propHeight="unset"
              propDisplay="unset"
              propDisplay1="unset"
              propMinWidth="unset"
            />
          </div>
        </div>
        <img
          className="w-[645px] relative max-h-full max-w-full z-[2]"
          loading="lazy"
          alt=""
          src="/line-8.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
