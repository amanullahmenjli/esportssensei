import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start py-[15px] px-0 gap-[25px] text-center text-13xl text-light font-section-title">
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
        <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
          Our top coaches
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] text-mini text-whitesmoke-200 font-archivo">
          <b className="flex-1 relative">
            Explore our heavily-vetted teachers who know the games, mechanics,
            and secrets to success.
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px]">
        <div className="flex-1 flex flex-col items-end justify-start relative gap-[25px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[6.3px] pl-1.5">
            <Select className="flex-1 font-section-title font-bold text-xl text-light" />
          </div>
          <div className="self-stretch h-[348px] rounded-16xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[121.8px] border-[1px] border-solid border-border">
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <img
                className="h-[226.2px] flex-1 relative max-w-full overflow-hidden object-cover shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/picture1@2x.png"
              />
              <img
                className="h-[25.1px] w-[65.6px] absolute !m-[0] top-[14px] right-[15.6px] z-[1]"
                loading="lazy"
                alt=""
                src="/group1.svg"
              />
              <div className="!m-[0] absolute bottom-[-87.9px] left-[12px] flex flex-col items-start justify-start gap-[29.2px]">
                <div className="h-[23.5px] flex flex-row items-start justify-start py-0 pr-[11px] pl-0 box-border relative gap-[7.5px] z-[1]">
                  <img
                    className="h-[26px] w-7 relative"
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                  <img
                    className="h-[26px] w-[27px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-33.svg"
                  />
                  <img
                    className="h-[26px] w-7 relative"
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                  <img
                    className="h-[26px] w-[26px] relative"
                    loading="lazy"
                    alt=""
                    src="/vector-51.svg"
                  />
                  <img
                    className="h-[26px] w-7 absolute !m-[0] right-[-24.5px] bottom-[-2.5px]"
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[4.6px]">
                  <div className="flex flex-row items-start justify-start gap-[37.3px]">
                    <img
                      className="h-[50.5px] w-[157px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-71.svg"
                    />
                    <input className="m-0 h-[42.9px] w-9" type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[125px] relative rounded-t-none rounded-b-16xl bg-glass box-border shrink-0 [debug_commit:1de1738] border-t-[5px] border-solid border-border" />
          </div>
          <div className="w-[46px] h-[46px] absolute !m-[0] right-[-23px] bottom-[151.1px] rounded-[50%] bg-border z-[2]" />
          <div className="w-[46px] h-[46px] absolute !m-[0] bottom-[151.1px] left-[-23px] rounded-[50%] bg-border z-[2]" />
          <img
            className="w-[46px] h-[46px] absolute !m-[0] right-[-23px] bottom-[151.1px] z-[3]"
            loading="lazy"
            alt=""
            src="/vector-9.svg"
          />
          <img
            className="w-[46px] h-[46px] absolute !m-[0] bottom-[151.1px] left-[-23px] object-contain z-[3]"
            alt=""
            src="/vector-10.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
