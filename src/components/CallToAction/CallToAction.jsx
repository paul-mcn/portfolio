import {
  ArrowDownCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import GlassButton from "@/components/buttons/GlassButton";
import styles from "./CallToAction.module.css";

const CTA = () => {
  return (
    <div
      className={`w-full border-b-slate-900 border-b-2 ${styles.background}`}
    >
      <div className="h-[120vh] md:h-screen py-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-transparent">
        <div className={styles.paperGrid}></div>
        <div className="w-1/2 mx-auto absolute left-0 right-0 !fill-white"></div>
        <div className="w-4/5 left-0 right-0 mt-32 mx-auto gap-4 flex flex-col items-center absolute">
          <p className="text-xl uppercase">Paul McNamara</p>
          <h1 className="text-6xl font-bold text-center">
            Innovative Full Stack Engineer with a passion for AI and growth
            <span className="text-amber-400">.</span>
          </h1>
          <p className="!test mt-4 w-3/4 text-gray-500 text-xl text-center">
            I’m a highly motivated software engineer who builds user-friendly
            and conversion-optimised e-commerce websites. With three years of
            professional experience, I bring a fresh perspective, great
            communication skills, excellent work ethic, and the ability to work
            exceptionally well under pressure. I'm looking for a full-time
            position.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            {/* <Button */}
            {/*   label="Get in touch" */}
            {/*   icon={<PaperAirplaneIcon className="w-6 h-6" />} */}
            {/*   className="border-2 border-amber-500" */}
            {/*   onClick={() => alert("I promise this will work later")} */}
            {/* /> */}
            <Link href="/Paul-McNamara-Resume.pdf" target="_blank">
              <GlassButton
                label="Download CV"
                icon={<ArrowDownCircleIcon className="w-6 h-6" />}
                background="#f59e0b"
                className="text-amber-800"
              />
            </Link>
          </div>
          <div className="mt-4 flex flex-row gap-1">
            <SocialIcon
              className="scale-75 border-2 rounded-full"
              fgColor="white"
              url="https://www.linkedin.com/in/paulmcnamarasoftware/"
              target="_blank"
            />
            <SocialIcon
              className="scale-75 border-2 rounded-full"
              fgColor="white"
              url="https://github.com/paul-mcn"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
