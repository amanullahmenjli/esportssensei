import { FunctionComponent } from "react";

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className="self-stretch h-[709px] flex flex-col items-start justify-start py-[45px] px-[28.5px] box-border gap-[25px] text-center text-13xl text-light font-section-title">
      <h2 className="m-0 relative text-inherit font-bold font-inherit">
        Why to choose us?
      </h2>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-px text-left text-5xl">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
          <div className="self-stretch flex-1 rounded-mini bg-glass overflow-hidden flex flex-row items-start justify-start pt-2.5 pb-0 pr-0 pl-2.5 gap-[34.5px] border-[1px] border-solid border-border">
            <div className="flex-1 flex flex-col items-start justify-start relative gap-[7px]">
              <b className="self-stretch relative">
                <p className="m-0">Easy</p>
                <p className="m-0">Booking</p>
              </b>
              <div className="w-[66px] h-px relative box-border border-t-[1px] border-solid border-border" />
              <b className="self-stretch relative text-4xs leading-[12px] font-archivo text-whitesmoke-200">
                Sessions are quickly and securely booked through our easy-to-use
                coaching portal.
              </b>
              <img
                className="w-36 h-[132px] absolute !m-[0] right-[-141px] bottom-[-58.9px] object-cover z-[1]"
                alt=""
                src="/nobg-11@2x.png"
              />
            </div>
            <div className="self-stretch w-[102px] flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border">
              <div className="self-stretch flex-1 relative rounded-mini max-w-full max-h-full flex items-center justify-center">
                <img
                  className="self-stretch flex-1 overflow-hidden object-contain absolute left-[0px] top-[0px] w-full h-full [transform:scale(2.961)]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-21.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-mini bg-glass overflow-hidden flex flex-row items-end justify-start pt-2 pb-0 pr-0 pl-2.5 gap-[2.5px] border-[1px] border-solid border-border">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[18px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                <b className="self-stretch relative">{`Safe & Secure`}</b>
                <div className="w-[66px] h-px relative box-border border-t-[1px] border-solid border-border" />
                <b className="self-stretch relative text-4xs leading-[12px] font-archivo text-whitesmoke-200">
                  Every Sensei undergoes extensive background checks before
                  being considered and we have a zero tolerance approach for
                  anyone who operates outside our code of conduct.
                </b>
              </div>
            </div>
            <div className="w-[134px] flex flex-row items-start justify-start relative">
              <div className="h-[117px] w-[102px] absolute !m-[0] right-[0px] bottom-[0px] rounded-mini flex items-center justify-center z-[0]">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.961)]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2-11.svg"
                />
              </div>
              <img
                className="h-[123px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                alt=""
                src="/nobg-1-1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch h-[175px] rounded-mini bg-glass box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-2.5 px-[12.5px] relative gap-[18px] border-[1px] border-solid border-border">
            <div className="w-[152px] !m-[0] absolute top-[10px] left-[12.5px] flex flex-col items-start justify-start gap-[7px]">
              <b className="self-stretch relative">Better K/D/A Promise</b>
              <div className="w-[66px] h-px relative box-border border-t-[1px] border-solid border-border" />
              <b className="self-stretch relative text-4xs leading-[12px] font-archivo text-whitesmoke-200">
                If for any reason you're not satisfied with your first lesson,
                we'll pair you with another Sensei free of charge. There's a
                Sensei for everyone and we're confident you'll meet yours.
              </b>
            </div>
            <div className="w-[102px] h-[117px] absolute !m-[0] right-[0px] bottom-[0px] rounded-mini flex items-center justify-center z-[1]">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.961)]"
                loading="lazy"
                alt=""
                src="/rectangle-2-21.svg"
              />
            </div>
            <img
              className="w-[151px] h-[139px] absolute !m-[0] top-[37.9px] left-[154.5px] object-contain z-[1]"
              alt=""
              src="/nobg-1-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
