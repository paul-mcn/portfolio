const achievements = [
  {
    icon: "",
    value: "",
    link: "https://gecko.rent/en/profile/bbKB5St4pJJx6ACKD/booking"
  },
  {
    icon: "",
    value: ""
  },
  {
    icon: "",
    value: ""
  }
]
const getProfessionalExperiences = () => {
  return [
    {
      title: "Gecko",
      dates: "Aug 2022 – Jan 2023",
      responsibilities: [
        "Develop and implement software projects to enhance Gecko's platform, including improving UI/UX, developing interfaces, and utilising various technologies such as Javascript/Node JS, MongoDB, Docker, CSS, HTML, and React.",
        "Enhance the usability and functionality of both desktop and mobile platforms, while planning for future improvements and expansions, and conducting beta testing for new additions.",
        "Conduct competitor analysis to stay abreast of industry trends and identify opportunities for Gecko's growth and development."
      ],
      achievements: [
        "Implemented Tailwind into Gecko’s front-end tech stack, increasing development productivity and decreasing code complexity, resulting in more features shipped.",
        "Developed a responsive booking page using Tailwind, NextJS and Apollo for different devices, streamlining the checkout process, resulting in increased customer conversions and satisfaction."
      ],
      learnings: [
        "Learned how to approach ideation with a customer-centric mindset, with an emphasis on understanding the customer's perspective and developing solutions that addressed their unique needs and challenges.",
        "Developed an understanding of software development best practices, including code organisation, version control, testing, and debugging.",
        "Utilised Docker to manage and deploy applications in a consistent and scalable way, developing an understanding of containerisation and microservices architecture."
      ]
    },
    {
      title: "Income Energy",
      dates: "Feb 2021 – Aug 2021",
      responsibilities: [
        "Create and maintain a billing system, ensuring accuracy and security of customer data.",
        "Develop and implement new features using HTML, CSS, and JavaScript to improve the user experience and functionality of the software application.",
        "Produce detailed code documentation to assist with future development, maintenance, and debugging of the application.",
      ],
      achievements: [
        "Coordinated the development of a secure automated billing system using agile methodologies and effective task delegation, resulting in increased productivity and reduced time spent on manual data entry.",
        "Developed a user-friendly interface for stakeholders to access and review billing data and invoices.",
        "Collaborated effectively with another developer and stakeholders to ensure the system met all requirements and was delivered on time."
      ],
      learnings: [
        "Developed an understanding of authentication methods and how to implement them to ensure the security of customer data.",
        "Learned how to effectively manage and resolve conflicts that arose during the project, including technical challenges and communication breakdowns.",
        "Gained an understanding of the importance of user experience and usability in software development, and how to incorporate these considerations into the development process."
      ]
    }
  ]
}

const getAcademicExperiences = () => {
  return [
    {
      title: "University Of Technology Sydney",
      responsibilities: [
        "Ensure that systems are resilient and perform as expected, with the ability to handle unusual combinations of events and maintain performance throughout the system's lifespan. (For core software engineering subjects)",
        "Focus on state-of-the-art research on deep learning and convolutional neural networks (CNNs) with practical applications. (For machine learning subjects)",
        "Keeping up-to-date with emerging technologies and industry trends in software "
      ],
      achievements: [
        "High Distinction in Engineering Communication.",
        "High Distinction in Data Structures and Algorithms.",
        "High Distinction in Applications Programming.",
        "GPA 6.02 and WAM 79.97 (Distinction average)."
      ],
      learnings: [
        "Developed skills to identify issues with existing systems and create new possibilities with the application of large-scale software design.",
        "Gained an understanding of managing and prioritising multiple projects based on their deadlines and scope"
      ]
    }
  ]
}

export { getProfessionalExperiences, getAcademicExperiences }
