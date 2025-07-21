"use client";
import HoverEffectContainer from "@/components/cursor/HoverEffectContainer";

export default function Home() {
  return (
    <div className="text-white bg-slate-400">
      <div className="flex flex-col mx-auto w-full max-w-6xl min-h-screen">
        <div className="mt-40 mr-auto ml-10 font-thin text-slate-100">
          {/* <div */}
          {/*   className="text-2xl font-black" */}
          {/*   onMouseEnter={() => { */}
          {/*     setCursorVariant("text"); */}
          {/*   }} */}
          {/*   onMouseLeave={() => setCursorVariant("default")} */}
          {/* > */}
          {/*   Paul McNamara Software */}
          {/* </div> */}
          <HoverEffectContainer
            className="text-9xl font-black"
            variantSize={{ default: 64, text: 300 }}
          >
            New Website Coming Soon
          </HoverEffectContainer>
        </div>
        {/* <div className="mt-auto mr-20 mb-40 ml-auto"> */}
        {/*   <Button label="Contact" href="/get-started" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
