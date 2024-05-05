import { FunctionComponent } from "react";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border top-[0] z-[99] sticky max-w-full">
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[378px] w-[calc(100%_-_13px)] absolute !m-[0] right-[6.5px] bottom-[-272px] left-[6.5px] max-w-full overflow-hidden object-cover"
          alt=""
          src="/image-8@2x.png"
        />
        <header className="flex-1 bg-gray-200 flex flex-row items-start justify-center py-[25px] px-5 box-border gap-[448px] max-w-full z-[1] text-left text-5xl text-light font-archivo mq450:gap-[56px] mq925:gap-[112px] mq1400:gap-[224px]">
          <div className="w-[278px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <img
              className="w-[114px] h-[46px] relative"
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
            <div className="h-9 flex flex-row items-start justify-start gap-[38.8px] opacity-[0.7] mq925:gap-[19px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[30px] w-[30px] relative min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <b className="relative whitespace-nowrap">How it works?</b>
                </div>
              </div>
              <div className="h-[38.5px] w-[2.5px] relative box-border border-r-[2.5px] border-solid border-light" />
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[30px] w-[29px] relative"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <b className="h-4 relative inline-block">Ressources</b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[279px] flex flex-row items-start justify-start gap-[22px] mq1400:hidden">
            <button className="cursor-pointer [border:none] py-[15px] px-[25px] bg-gray-100 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray">
              <b className="relative text-5xl inline-block font-archivo text-light text-left min-w-[70px]">
                Log in
              </b>
            </button>
            <button className="cursor-pointer py-3 px-[22px] bg-[transparent] flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start border-[2.5px] border-solid border-crimson-200 hover:bg-crimson-400 hover:box-border hover:border-[2.5px] hover:border-solid hover:border-crimson-100">
              <b className="relative text-5xl inline-block font-archivo text-crimson-200 text-left min-w-[87px] whitespace-nowrap">
                Join Us
              </b>
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default FrameComponent3;
