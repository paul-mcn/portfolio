"use client";
import {
	ArrowDownCircleIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import GlassButton from "@/components/buttons/GlassButton";
import styles from "./CallToAction.module.css";

const CTA = () => {
	const subtitle =
		"I'm a highly motivated software engineer specialising in creating user-friendly, conversion-optimised web applications tailored to unique client needs. I excel in developing bespoke solutions beyond standard templates, ensuring each project perfectly aligns with the client's vision. With excellent communication skills, a fresh perspective, and a strong work ethic, I'm open to both contract work and full-time positions, ready to deliver innovative web applications that stand out.";
	return (
		<div className="relative">
			<div className={styles.paperGrid}></div>
			<div
				className={`w-full min-h-screen border-b-slate-900 border-b-2 ${styles.background}`}
			>
				<div className="py-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-transparent">
					<div className="w-1/2 mx-auto absolute left-0 right-0 !fill-white"></div>
					<div className="w-4/5 left-0 right-0 mt-32 mx-auto gap-4 flex flex-col items-center">
						<p className="text-xl uppercase">Paul McNamara</p>
						<h1 className="text-4xl md:text-6xl font-bold text-center">
							{[..."Crafting Bespoke Web Applications for Unique Visions"].map(
								(l, idx) => {
									const shouldFlicker = Math.random() > 0.8;
									const animationDelay = `${0.1 + Math.random()}s`;
									const animationIterationCount = Math.round(
										Math.min(Math.random() * 10 + 1, 2),
									);
									const animationDuration = `${Math.min(Math.random(), 0.4)}s`;
									return (
										<span
											key={l + idx}
											className={shouldFlicker ? `${styles.flicker}` : ""}
											style={
												shouldFlicker
													? {
														animationDelay,
														animationIterationCount,
														animationDuration,
													}
													: {}
											}
										>
											{l}
										</span>
									);
								},
							)}
							<span className="text-amber-400">.</span>
						</h1>
						<div
							className={`mt-4 relative w-3/4 overflow-hidden ${styles.textBox}`}
						>
							{/* This is just a placeholder for space. It should have the same size as the following <p> tag */}
							<p className="text-sm border-[1px] p-4 m-2 md:text-xl opacity-0 text-center">
								{subtitle}
							</p>
							<p
								className={`text-sm bg-slate-800/20 p-4 m-2 absolute bottom-0 border-[1px] border-slate-700 rounded-lg text-gray-500 md:text-xl text-center backdrop-blur-[1px] `}
							>
								{subtitle}
							</p>
							<div className="w-3 h-3 border-2 rounded-sm border-slate-400 absolute left-1 top-1 bg-slate-900"></div>
							<div className="w-3 h-3 border-2 rounded-sm border-slate-400 absolute right-1 bottom-1 bg-slate-900"></div>
						</div>
						<div className="flex flex-row gap-4 mt-4">
							<Link href="/Paul-McNamara-Resume.pdf" target="_blank">
								<GlassButton
									label="Download CV"
									icon={<ArrowDownCircleIcon className="w-6 h-6" />}
									background="#1c2638"
									className="text-amber-600 hover:text-amber-500"
								/>
							</Link>
							<Link href="mailto:paul.a.mcnamara@outlook.com">
								<GlassButton
									label="Get in touch"
									background="#f59e0b"
									primary={true}
									icon={<PaperAirplaneIcon className="w-6 h-6" />}
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
		</div>
	);
};

export default CTA;
