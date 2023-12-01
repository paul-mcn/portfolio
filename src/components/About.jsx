import Heading from "./Heading";
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <div className="bg-slate-700">
      <Wrapper>
        <Heading text="About" />
        <div className="flex flex-col gap-2 relative">
          <p>
            I love design. From a young age, I’ve always tinkered and
            experimented with things to see how they work together. I also enjoy
            playing video games, and so from year 10 onwards I started learning
            Photoshop, After Effects, and Maya. During years 10 through 12 I
            enrolled in a game art and VFX course alongside school. It was a
            great course that further enhanced my design skills and introduced
            me to industry standard practices and working within a team. As soon
            as I graduated, I enrolled in an even more advanced game art and VFX
            course and worked at a graphics studio part time. While working at
            this graphics studio, I started developing small scripts using
            Python and MEL to improve my workflow in Maya.
          </p>
          <p>
            I was intrigued by how much these small python scripts improved my
            workflow. The efficiency gains were insane. Because of this, I
            wanted to learn more about programming, and I eventually stumbled
            across web design and full stack development. I spent a bit of time
            learning the basics like HTML, CSS, JS and design principles by
            following tutorials and creating landing pages and Todo apps. At the
            beginning, it was a bit confusing, strange, and frustrating.
            However, as I further developed my skills and started working on my
            own projects, web dev became much more enjoyable. Being able to
            tinker and experiment on code satisfied my itch for curiosity. Once
            I realised I was able to combine my love of design with my newfound
            desire to program, and make a career out it, I knew that this was
            exactly what I wanted to do.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
