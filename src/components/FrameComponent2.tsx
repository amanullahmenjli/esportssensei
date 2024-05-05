import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  iDoubledUpMyMMRStartedAsA?: string;
  group2347?: string;
  alexWi?: string;
  alexWi1?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  iDoubledUpMyMMRStartedAsA,
  group2347,
  alexWi,
  alexWi1,
  propHeight,
  propDisplay,
  propDisplay1,
  propMinWidth,
}) => {
  const alexWiStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const alexWi1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth,
    };
  }, [propDisplay1, propMinWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[354px] max-w-full text-left text-29xl text-light font-archivo mq450:min-w-full mq925:gap-[23px]">
      <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-semibold font-inherit mq450:text-10xl mq450:leading-[38px] mq925:text-19xl mq925:leading-[51px]">
        {iDoubledUpMyMMRStartedAsA}
      </h1>
      <div className="flex flex-row items-center justify-start gap-[22px] text-17xl text-steelblue font-section-title">
        <img
          className="h-[105px] w-[105px] relative"
          loading="lazy"
          alt=""
          src={group2347}
        />
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <h2
            className="m-0 h-11 relative text-inherit font-semibold font-inherit inline-block whitespace-nowrap mq450:text-3xl mq925:text-10xl"
            style={alexWiStyle}
          >
            {alexWi}
          </h2>
          <div
            className="relative text-xl font-semibold text-whitesmoke-300 inline-block min-w-[90px] mq450:text-base"
            style={alexWi1Style}
          >
            {alexWi1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
