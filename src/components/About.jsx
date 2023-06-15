import Heading from "./Heading";
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <div className="bg-slate-700">
      <Wrapper>
        <Heading text="About" />
        <div className="flex flex-col gap-2 relative">
          <p className="z-10">
            When I’m not busy coding or studying, I like to indulge in some
            outdoor activities. Sometimes I go on bush walks and pretend I’m an
            explorer in a jungle adventure. Other times I research the newest
            tech and drool over the gadgets I can’t afford. And when the weather
            is nice, I go out to the beach for a swim and try not to get eaten
            by sharks.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
