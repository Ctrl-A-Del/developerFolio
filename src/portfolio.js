/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
const illustration = {
  animated: true // set to false to use static SVG
};



// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 750 // Set animation duration as per your animation
};

const greeting = {
  username: "Sebastian Auner",
  title: "Hi, I'm Sebastian",
  subTitle: emoji(
    // "I'm a passionate developer who enjoys experimenting with different technologies. I have experience in building Web and Mobile applications with JavaScript / Reactjs / Nodejs and also enjoy playing around with Virtual Reality using the Unity Engine."
    "I'm a passionate developer who is always up for a new challenge and enjoys learning different and new technologies. I have experience in building Web and Mobile applications with JavaScript / ReactJS / Node.js, and some other awesome libraries and frameworks."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "mail@sebastianauner.com",
  gitlab: "https://gitlab.com/Ctrl-A-Del",
  github: "https://github.com/Ctrl-A-Del",
  linkedin: "https://www.linkedin.com/in/sebastian-auner-a625a8160/",
  xing: "https://www.xing.com/profile/Sebastian_Auner3",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "Never stop learning new technologies.",
  skills: [
    emoji("⚡ Developing web components with ReactJS and Riot.js"),
    emoji(
      "⚡ Investigating Data Visualisation and Game Development in Virtual Reality using Unity"
    ),
    emoji("⚡ Experimenting with self-hosting and studying DevOps techniques")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hochschule Düsseldorf",
      logo: require("./assets/images/hsd.jpg"),
      subHeader: "Master of Science in Media Informatics",
      duration: "September 2016 - April 2019",
      desc: "Final score: 1.2",
      descBullets: [
        "focussed on scientific work and virtual reality",
        "master's thesis about graph visualisation"
      ]
    },
    {
      schoolName: "Hochschule Düsseldorf",
      logo: require("./assets/images/hsd.jpg"),
      subHeader: "Bachelor of Science in Media Informatics",
      duration: "September 2012 - August 2016",
      desc: "Final score: 1.6",
      descBullets: [
        "focussed on web and mobile development",
        "bachelor's thesis about eyetracking"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Reuter Gruppe",
      companylogo: require("./assets/images/reuter_drop.png"),
      date: "Mai 2019 – Present",
      // desc:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: ["Frontend Web Development", "UX Design"]
    },
    {
      role: "Scientific Researcher",
      company: "Hochschule Düsseldorf",
      companylogo: require("./assets/images/hsd.jpg"),
      date: "November 2016 – December 2018",
      // desc:
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Experimenting with Virtual Reality",
        "Presenting on conventions"
      ]
    },
    {
      role: "Android Developer",
      company: "NanoGiants",
      companylogo: require("./assets/images/nanogiants.png"),
      date: "October 2014 –  February 2015",
      // desc:
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: ["Internship", "Developing native Android apps"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/logo_fkk_covid_300x300.png"),
      projectName: "Support Your Local Heroes",
      projectDesc:
        "Non-profit t-shirt online shop during COVID-19. All profits went directly to local retailers in Mönchengladbach.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.supportlocalheroes.de/"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "",

  achievementsCards: [
    {
      title: 'Award Winner "Rheinland Genial"',
      subtitle:
        'Our project "Support Your Local Heroes" has won the award "Rheinland Genial" for the innovative idea during the COVID-19 pandemic.',
      image: require("./assets/images/rheinlandGenial.jpg"),
      footerLink: [
        {
          name: "Press Release",
          url:
            "https://metropolregion-rheinland.de/preistraeger-rheinland-genial/wissenscampus-moenchengladbach-ev-initiative-support-your-local-heroes-rechenzentrum-hartmann-gmbh-und-co-kg/"
        }
      ]
    },
    {
      title: "GitLab Certified Associate",
      subtitle:
        "Certification of proficiency to use GitLab and its DevOps tools",
      image: require("./assets/images/gitlab.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://api.badgr.io/public/assertions/_yq2ooe3RJqzyJoM9OqjIw?identity__email=gitlab%40mailwarden.de"
        }
      ]
    },
    {
      title: "Cambridge Certificate FCE B2",
      subtitle: "International certification from the Cambridge Institute",
      image: require("./assets/images/cambridge.png"),
      footerLink: [
        {
          name: "Certificate",
          url: require("./assets/docs/cambridge.pdf")
        }
      ]
    }
    // comment this out until I know where the certificate is
    // {
    //   title: "CCNA Exploration: Network Fundamentals",
    //   subtitle:
    //       "Certificate for fundamental networking concepts and technologies from Cisco Systems",
    //     image: require("./assets/images/ccna.png"),
    //     footerLink: [
    //       {
    //         name: "Certificate",
    //         url: ""
    //       }
    //     ]
    //   }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle: "A place where I share my knowledge and hope to inspire people.",

  blogs: [
    {
      url: "https://blog.sebastianauner.com",
      title: "My digital garden is a place where I grow my ideas.",
      description:
        "The digital garden  focuses on the process of developing ideas and work with the garage door open."
    },
    {
      url: "https://blog.sebastianauner.com/zettelkasten",
      title: "What is a Zettelkasten?",
      description:
        "The Zettelkasten method is a workflow to create notes that you can use to increase your long term knowledge and find new insights."
    },
    {
      url: "https://blog.sebastianauner.com/photoprism",
      title: "PhotoPrism is a privacy friendly image gallery",
      description:
        "PhotoPrism is a software for organizing a photo gallery. Using machine learning, it indexes and structures the pictures into different albums, allows searching etc."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to me 📨"),
  // subtitle:
  // "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+49 170 994 0 985",
  email_address: "mail@sebastianauner.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  splashScreen
};
