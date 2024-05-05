import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start relative max-w-full">
      <div className="h-[283px] w-[51px] absolute !m-[0] top-[54px] left-[calc(50%_-_141.5px)] [filter:blur(100px)] rounded-[50%] bg-crimson-300 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="flex-1 flex flex-row items-start justify-between pt-[45px] px-[25px] pb-[55px] box-border max-w-full gap-[20px] z-[1]">
        <img
          className="h-[34.3px] w-[85px] relative"
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[11.6px] px-0 pb-0">
          <div className="flex flex-row items-center justify-start">
            <div className="h-[11px] w-[34px] relative">
              <div className="absolute top-[0px] left-[0px] box-border w-[37px] h-[3px] border-t-[3px] border-solid border-white" />
              <div className="absolute top-[11px] left-[0px] box-border w-[37px] h-[3px] border-t-[3px] border-solid border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
