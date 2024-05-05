import { FunctionComponent } from "react";

const AboutUs: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[254px] box-border max-w-full text-center text-21xl text-whitesmoke-100 font-archivo mq925:pb-[165px] mq925:box-border">
      <div className="w-[1231.2px] flex flex-col items-end justify-start gap-[38px] max-w-full mq925:gap-[19px]">
        <div className="self-stretch h-[186px] relative max-w-full shrink-0 z-[1] flex items-center justify-center">
          <img
            className="self-stretch h-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[7px] top-[7px] w-full [transform:scale(1.075)]"
            loading="lazy"
            alt=""
            src="/group-2350.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[946px] relative text-inherit inline-block shrink-0 max-w-full font-inherit mq450:text-5xl mq925:text-13xl">
            <span>{`Learn from the industry's best coaches at `}</span>
            <span className="font-extrabold">Esportssensei</span>
            <span>, the world's premier esports coaching platform.</span>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-crimson-200 font-section-title">
          <div className="rounded-16xl box-border overflow-hidden flex flex-row items-start justify-start py-[22px] px-[42px] gap-[25px] max-w-full border-[2.5px] border-solid border-crimson-200 mq925:flex-wrap mq925:justify-center mq925:pl-[21px] mq925:pr-[21px] mq925:box-border">
            <b className="relative inline-block max-w-full mq450:text-5xl mq925:text-13xl">
              Book your session!
            </b>
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <img
                className="w-[38px] h-7 relative object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
