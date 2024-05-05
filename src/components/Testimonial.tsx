import { FunctionComponent } from "react";

export type TestimonialType = {
  group2347?: string;
};

const Testimonial: FunctionComponent<TestimonialType> = ({ group2347 }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-[45px] gap-[9px] text-left text-base text-light font-archivo">
      <div className="w-[270px] relative font-semibold inline-block">
        I doubled up my MMR, started as a crusader… I highly recommend coaching
        with Gamer Sensei.
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px] text-sm text-steelblue font-section-title">
        <img
          className="h-10 w-10 relative"
          loading="lazy"
          alt=""
          src={group2347}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative font-semibold inline-block min-w-[53px]">
            Alex Wi
          </div>
          <div className="relative text-5xs font-semibold text-whitesmoke-300 inline-block min-w-[36px]">
            @alex_wi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
