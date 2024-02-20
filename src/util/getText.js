const getLeadership = () => {
	return [
		"Coordinated and oversaw development of a billing system while working at Axon Energy through effective management of team tasks and resources, ensuring project milestones were met.",
		"Led and motivated a team as house captain, additionally, organising house events and representing the house in competitions.",
	];
};

const getExperiences = () => {
	return [
		{
			title: "Gecko",
			imagePath: "/images/gecko-logo.jpg",
			dates: { from: "Aug 2022", to: "Jan 2023", total: "6 months" },
			experienceType: "Internship",
			responsibilities: [
				"Develop and implement software projects to enhance Gecko's platform, including improving UI/UX, developing interfaces, and utilising various technologies such as Javascript/Node JS, MongoDB, Docker, CSS, HTML, and React.",
				"Enhance the usability and functionality of both desktop and mobile platforms, while planning for future improvements and expansions, and conducting beta testing for new additions.",
				"Conduct competitor analysis to stay abreast of industry trends and identify opportunities for Gecko's growth and development.",
			],
			achievements: [
				"Implemented Tailwind into Gecko’s front-end tech stack, increasing development productivity and decreasing code complexity, resulting in more features shipped.",
				"Developed a responsive booking page using Tailwind, NextJS and Apollo for different devices, streamlining the checkout process, resulting in increased customer conversions and satisfaction.",
			],
			learnings: [
				"Learned how to approach ideation with a customer-centric mindset, with an emphasis on understanding the customer's perspective and developing solutions that addressed their unique needs and challenges.",
				"Developed an understanding of software development best practices, including code organisation, version control, testing, and debugging.",
				"Utilised Docker to manage and deploy applications in a consistent and scalable way, developing an understanding of containerisation and microservices architecture.",
			],
		},
		{
			title: "Axon Energy",
			dates: { from: "Feb 2021", to: "Aug 2021", total: "7 months" },
			imagePath: "/images/axon-energy-logo.webp",
			experienceType: "Internship",
			responsibilities: [
				"Create and maintain a billing system, ensuring accuracy and security of customer data.",
				"Develop and implement new features using HTML, CSS, and JavaScript to improve the user experience and functionality of the software application.",
				"Produce detailed code documentation to assist with future development, maintenance, and debugging of the application.",
			],
			achievements: [
				"Coordinated the development of a secure automated billing system using agile methodologies and effective task delegation, resulting in increased productivity and reduced time spent on manual data entry.",
				"Developed a user-friendly interface for stakeholders to access and review billing data and invoices.",
				"Collaborated effectively with another developer and stakeholders to ensure the system met all requirements and was delivered on time.",
			],
			learnings: [
				"Developed an understanding of authentication methods and how to implement them to ensure the security of customer data.",
				"Learned how to effectively manage and resolve conflicts that arose during the project, including technical challenges and communication breakdowns.",
				"Gained an understanding of the importance of user experience and usability in software development, and how to incorporate these considerations into the development process.",
			],
		},
		{
			title: "University Of Technology Sydney",
			dates: { from: "Mar 2019", to: "Dec 2023", total: "5 years" },
			imagePath: "/images/uts-logo.webp",
			experienceType: "Study",
			responsibilities: [
				"Ensure that systems are resilient and perform as expected, with the ability to handle unusual combinations of events and maintain performance throughout the system's lifespan. (For core software engineering subjects)",
				"Focus on state-of-the-art research on deep learning and convolutional neural networks (CNNs) with practical applications. (For machine learning subjects)",
				"Keeping up-to-date with emerging technologies and industry trends in software ",
			],
			achievements: [
				"High Distinction in Engineering Communication.",
				"High Distinction in Data Structures and Algorithms.",
				"High Distinction in Applications Programming.",
				"GPA 6.02 and WAM 79.97 (Distinction average).",
			],
			learnings: [
				"Developed skills to identify issues with existing systems and create new possibilities with the application of large-scale software design.",
				"Gained an understanding of managing and prioritising multiple projects based on their deadlines and scope",
			],
		},
	];
};

const transferableSkills = [
	{
		skill: "Communication",
		desc: "Great written and oral communication skills demonstrated through my time working at Gecko by delivering web-based features that solved customer requirements.",
	},
	{
		skill: "Teamwork",
		desc: "Exhibited strong collaboration at Gecko by utilising the agile development process to effectively cooperate within a team of five, increasing the efficiency and quality of deliverables.",
	},
	{
		skill: "Resilience",
		desc: "Consistently achieved and exceeded expectations in a fast-paced and high stress environment at Pharmacare and Gecko.",
	},
	{
		skill: "Organisation",
		desc: "Managed tasks and time effectively by prioritising tasks using agile methodologies, Fibonacci sequence and Trello.",
	},
	{
		skill: "Problem Solving",
		desc: "Solved customers’ problems by eliciting their requirements and effectively developing web-based features.",
	},
	{
		skill: "Attention to Detail",
		desc: "Analysed customer requirements and user stories, and reviewed code effectively to ensure an optimised development pipeline.",
	},
];

const technicalSkills = [
	{ title: "Next.js", icon: "/images/nextjs-icon.png" },
	{ title: "React.js", icon: "/images/react-icon.png" },
	{ title: "Vue", icon: "/images/vue-icon.png" },
	{ title: "Svelte", icon: "/images/svelte-logo.png" },
	{ title: "Apollo", icon: "/images/apollo-icon.png" },
	{ title: "ExpressJS", icon: "/images/expressjs-icon.png" },
	{ title: "Flask", icon: "/images/flask-icon.png" },
	{ title: "NodeJS", icon: "/images/nodejs-icon.png" },
];

export { getLeadership, getExperiences, transferableSkills, technicalSkills };
