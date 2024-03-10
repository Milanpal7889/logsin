import { Aboutweb } from "../components/Aboutweb";
import { ComplainForm } from "../components/ComplainForm";
import { IntroSection } from "../components/IntroSection";
import { Slider } from "../components/Slider";
import { Testimonials } from "../components/Testimonials";

export const Home = () => {
  return (
    <>
      <Slider />
      <IntroSection />
      <Aboutweb />
      <Testimonials />
      <ComplainForm/>
    </>
  );
};
