import { FunctionComponent } from "react";

const Features: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-45xl text-light font-section-title">
      <div className="w-[1693px] flex flex-col items-start justify-start gap-[113px] max-w-full mq450:gap-[28px] mq925:gap-[56px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-19xl mq925:text-32xl">
            Why to choose us?
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left mq925:gap-[16px]">
          <div className="self-stretch rounded-mini bg-glass box-border overflow-hidden flex flex-row flex-wrap items-start justify-center py-0 pr-3.5 pl-11 gap-[34px] max-w-full z-[1] border-[1px] border-solid border-border mq925:gap-[17px] mq1400:pl-[22px] mq1400:box-border">
            <div className="flex flex-col items-start justify-start pt-[66px] pb-0 pr-[11px] pl-0">
              <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-19xl mq925:text-32xl">
                <p className="m-0">Easy</p>
                <p className="m-0">Booking</p>
              </h1>
            </div>
            <div className="h-[240.5px] flex flex-col items-start justify-start pt-[49.5px] pb-0 pr-[8.5px] pl-0 box-border">
              <div className="w-[2.5px] flex-1 relative box-border border-r-[2.5px] border-solid border-border" />
            </div>
            <div className="w-[484px] flex flex-col items-start justify-start pt-[107px] px-0 pb-0 box-border max-w-full text-5xl text-whitesmoke-200 font-archivo">
              <b className="self-stretch relative leading-[38px] mq450:text-lgi mq450:leading-[30px]">
                Sessions are quickly and securely booked through our easy-to-use
                coaching portal.
              </b>
            </div>
            <div className="h-[297px] flex-1 relative rounded-mini max-w-full min-w-[494px] flex items-center justify-center">
              <img
                className="h-full flex-1 overflow-hidden object-contain absolute left-[0px] top-[0px] w-full [transform:scale(3.02)] mq925:min-w-full"
                alt=""
                src="/rectangle-2.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[25px] max-w-full mq1875:flex-wrap">
            <div className="flex-1 rounded-mini bg-glass box-border overflow-hidden flex flex-row items-end justify-center pt-[23px] pb-0 pr-0 pl-[43px] gap-[65px] min-w-[574px] max-w-full z-[1] border-[1px] border-solid border-border mq450:gap-[16px] mq925:flex-wrap mq925:gap-[32px] mq925:pl-5 mq925:pr-5 mq925:pb-5 mq925:box-border mq925:min-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[41px] box-border min-w-[258px] min-h-[477px] max-w-full mq925:pb-[27px] mq925:box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[23.8px]">
                  <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-19xl mq925:text-32xl">{`Safe & Secure`}</h1>
                  <div className="w-[193.5px] h-[2.5px] relative box-border border-t-[2.5px] border-solid border-border" />
                  <b className="self-stretch relative text-5xl leading-[38px] font-archivo text-whitesmoke-200 mq450:text-lgi mq450:leading-[30px]">
                    Every Sensei undergoes extensive background checks before
                    being considered and we have a zero tolerance approach for
                    anyone who operates outside our code of conduct.
                  </b>
                </div>
              </div>
              <div className="h-[345px] w-[376px] relative min-w-[376px] max-w-full mq925:flex-1 mq925:min-w-full">
                <div className="absolute top-[48px] left-[116px] rounded-mini w-[260px] h-[297px] flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(3.308)]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-2-1.svg"
                  />
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
                  alt=""
                  src="/nobg-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[785px] rounded-mini bg-glass box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[23px] pb-0 pr-0 pl-[43px] gap-[5px] min-w-[785px] max-w-full z-[1] border-[1px] border-solid border-border mq925:pl-[21px] mq925:box-border mq925:min-w-full mq1875:flex-1">
              <h1 className="m-0 w-[397px] relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-19xl mq925:text-32xl">
                Better K/D/A Promise
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-5xl text-whitesmoke-200 font-archivo mq925:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[253px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22.5px]">
                    <div className="w-[193.5px] h-[2.5px] relative box-border border-t-[2.5px] border-solid border-border" />
                    <b className="self-stretch relative leading-[38px] mq450:text-lgi mq450:leading-[30px]">
                      If for any reason you're not satisfied with your first
                      lesson, we'll pair you with another Sensei free of charge.
                      There's a Sensei for everyone and we're confident you'll
                      meet yours.
                    </b>
                  </div>
                </div>
                <div className="h-[314px] w-[326px] relative min-w-[326px] max-w-full mq925:flex-1">
                  <div className="absolute top-[17px] left-[66px] rounded-mini w-[260px] h-[297px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(3.308)]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-2-2.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
                    alt=""
                    src="/ribbon@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
