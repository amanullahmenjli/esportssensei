import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent11";
import BodyContent from "../components/BodyContent";
import FrameComponent from "../components/FrameComponent4";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials1";

const WebsiteLayout: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-background overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[138px] box-border max-w-full">
        <FrameComponent1 />
        <BodyContent />
        <FrameComponent />
        <WhyChooseUs />
        <Testimonials />
      </main>
    </div>
  );
};

export default WebsiteLayout;
