import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";

const BodyContent: FunctionComponent = () => {
  return (
    <section className="self-stretch h-[577.8px] relative text-left text-23xl text-white font-section-title">
      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start py-0 px-[25px] box-border gap-[45px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
          <img className="w-[292px] h-44 relative hidden" alt="" />
          <div className="flex flex-col items-center justify-start py-0 px-2.5 gap-[3px]">
            <img
              className="w-[164.4px] h-[33px] relative"
              loading="lazy"
              alt=""
              src="/break.svg"
            />
            <h1 className="m-0 relative text-inherit font-bold font-inherit">
              YOUR LIMITS.
            </h1>
            <h1 className="m-0 relative text-inherit font-bold font-inherit">
              TRAIN LIKE A
            </h1>
            <h1 className="m-0 w-[254px] relative text-inherit font-bold font-inherit text-crimson-200 inline-block [text-shadow:2px_2px_12px_rgba(195,_8,_63,_0.5),_-2px_-2px_12px_rgba(195,_8,_63,_0.5)]">
              CHAMPION.
            </h1>
          </div>
          <img className="w-[317.5px] h-12 relative hidden" alt="" />
          <div className="self-stretch relative text-xl leading-[28px] text-whitesmoke-200 text-center font-archivo">
            <span>{`Learn from the industry's best coaches at `}</span>
            <span className="font-extrabold">Esportssensei</span>
            <span>, the world's premier esports coaching platform.</span>
          </div>
        </div>
        <Select className="font-section-title font-bold text-xl text-crimson-200" />
      </div>
      <div className="absolute top-[428.5px] left-[-42.8px] w-[445.7px] h-[149.3px] flex flex-row items-start justify-start py-[35px] px-0 box-border z-[1]">
        <img
          className="h-[79.3px] w-full !m-[0] absolute top-[calc(50%_-_39.65px)] right-[0px] left-[0px] max-w-full overflow-hidden object-contain"
          loading="lazy"
          alt=""
          src="/frame-111@2x.png"
        />
      </div>
    </section>
  );
};

export default BodyContent;
