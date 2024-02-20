import Card from "./Card";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import { technicalSkills, transferableSkills } from "@/util/getText";
import GlassCard from "@/components/GlassCard";
import ImageWithFallback from "./ImageWithFallback";

const Skills = () => {
	return (
		<div className="text-slate-100">
			<Wrapper>
				<Heading text="Skills" />
				<div className="mt-4">
					<h3 className="text-xl font-bold">Transferable</h3>
					<ul className="py-2 grid sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-stretch">
						{transferableSkills.map(({ skill, desc }) => (
							<li key={skill}>
								<GlassCard className="h-full">
									<div className="bg-slate-700 rounded-lg p-4 h-full">
										<div className="font-bold">{skill}</div>
										<div>{desc}</div>
									</div>
								</GlassCard>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-6">
					<h3 className="text-xl font-bold">Technical</h3>
					<ul className="py-2 grid grid-cols-2 sm:grid-cols-4 gap-3 place-items-stretch">
						{technicalSkills.map(({ title, icon }) => (
							<li key={title} className="h-full">
								<GlassCard className="h-full">
									<div className="bg-slate-700 rounded-lg p-4 h-full flex flex-col items-center justify-between">
										<div className="h-32 relative w-full">
											<ImageWithFallback
												src={icon}
												fill
												style={{ objectFit: "contain" }}
												alt={`Logo of ${title} showing skill learned`}
											/>
										</div>
										<div className="text-slate-300 text-sm pt-4">{title}</div>
									</div>
								</GlassCard>
							</li>
						))}
					</ul>
				</div>
			</Wrapper>
		</div>
	);
};

export default Skills;
