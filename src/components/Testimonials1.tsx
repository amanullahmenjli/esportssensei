import { FunctionComponent } from "react";
import Testimonial from "./Testimonial";

const Testimonials: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start text-center text-smi text-crimson-200 font-section-title">
      <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-0 gap-[25px]">
        <div className="flex flex-col items-center justify-start py-0 px-5">
          <b className="h-[9px] relative inline-block min-w-[101px]">
            WALL OF LOVE
          </b>
          <h2 className="m-0 relative text-13xl font-bold font-inherit text-light">
            <p className="m-0">Words from</p>
            <p className="m-0">our clients</p>
          </h2>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/line-71.svg"
        />
        <Testimonial group2347="/group-23471.svg" />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/line-81.svg"
        />
        <Testimonial group2347="/group-2347-11.svg" />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/line-91.svg"
        />
        <Testimonial group2347="/group-2347-21.svg" />
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/line-10.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[95.1px] pb-[56.9px] pr-[69.5px] pl-[70px] relative z-[1] mt-[-195.1px] text-left text-xl text-light">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(13,_13,_16,_0.2),_#0d0d10_48.5%)]" />
        <div className="flex-1 rounded-xl bg-glass overflow-hidden flex flex-row items-start justify-start py-3 px-[22px] gap-[25px] z-[1] border-[2.5px] border-solid border-border">
          <b className="relative inline-block min-w-[117px]">Show more</b>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[28.5px] h-[21px] relative object-contain"
              loading="lazy"
              alt=""
              src="/vector-111.svg"
            />
          </div>
        </div>
        <img
          className="h-[84px] w-[312px] absolute !m-[0] bottom-[-72.1px] left-[calc(50%_-_156px)] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
    </section>
  );
};

export default Testimonials;
