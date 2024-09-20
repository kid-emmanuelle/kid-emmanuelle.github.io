export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Amandine Reneaux',
    position: 'Assistant at Data Vision & Systems',
    img: 'assets/review1.png',
    review: 'Working with Emmanuelle at DVS has been an absolute pleasure. She demonstrates a strong commitment to our projects and are always keen to explore innovative approaches to problem-solving. Her work on intelligent automation, user-friendly interfaces, and server implementation has impressed everyone on the team. Her ability to optimize system performance while maintaining usability has been invaluable. Whether it\'s working with any projects, Emmanuelle brings both expertise and a positive attitude to every task.',
  },
  {
    id: 2,
    name: 'Pascal Repjuk',
    position: 'CEO at Data Vision & Systems',
    img: 'assets/review2.png',
    review: 'Emmanuelle has proven to be an outstanding apprentice at DVS. Her technical skills are really good, but what truly sets her apart is her problem-solving ability and dedication to continuous improvement. She has successfully managed a range of tasks, from creating error detection systems to deploying cost-saving solutions on ARM Linux platforms. Her work with wireless solutions and bus system communications has been crucial for our operations. I’m consistently impressed by her capacity to quickly grasp new technologies and her eagerness to apply her in meaningful ways.',
  },
  {
    id: 3,
    name: 'Camille Guillier',
    position: 'Student at INSA Hauts-de-France',
    img: 'assets/review3.png',
    review: 'I had the pleasure of working with Kid on multiple projects during our time at INSA Hauts-de-France. Her understanding of computer science fundamentals is outstanding, and they have a great knack for applying theory to real-world projects. From developing full-stack applications to designing AI algorithms, her technical expertise spans across a wide array of technologies. I was particularly impressed by her ability to manage complex projects, like building a full-stack bookstore and hotel management system, and their eagerness to learn and explore new frameworks like ReactJS and NextJS.',
  },
  {
    id: 4,
    name: 'Doha MEKOUAR',
    position: 'Student at INSA Hauts-de-France',
    img: 'assets/review4.png',
    review: 'Kid is one of the most dedicated and talented individuals I have had the opportunity to collaborate with at INSA Hauts-de-France. Her proficiency across a variety of programming languages and frameworks is impressive. I’ve seen them excel in everything from AI algorithm development to full-stack web and mobile app creation. She is always curious and eager to improve, which is evident from her personal projects and her commitment to mastering emerging technologies. It’s been inspiring to watch her growth over the years, and I’m confident she has a bright future ahead in the tech world.',
  },
];

export const myProjects = [
  {
    title: 'INSenior - A Senior Care Platform',
    desc: 'INSenior is a senior care platform designed to support healthy aging by providing personalized exercise routines and health monitoring. The app integrates FleStick technology for seamless tracking and offers a complete style guide for intuitive navigation, ensuring a smooth experience for both seniors and caregivers.',
    subdesc:
      'Built with Flutter and powered by Firebase, INSenior leverages modern technology to offer easy-to-follow routines and health insights. The app\'s user-friendly interface, developed with Figma, ensures accessibility for seniors, while Postman was used for robust API integration.',
    href: 'https://github.com/kid-emmanuelle',
    texture: '/textures/project/project-2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.svg',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase.svg',
      },
      {
        id: 3,
        name: 'Postman',
        path: '/assets/postman.svg',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/uxui.svg',
      },
    ],
  },
  {
    title: 'TiKi - A Bookstore Platform',
    desc: 'TiKi is a comprehensive bookstore platform, offering a curated selection of books across various genres. Built using Symfony, PHP, and SQLite, the platform ensures a smooth browsing and purchasing experience for book lovers while utilizing Twig for clean, efficient templating and Doctrine for robust database management.',
    subdesc:
      'With TiKi, readers can explore a wide range of titles, enjoy easy returns, and benefit from free shipping and 24/7 support. The platform combines modern technology with a user-friendly interface, making it a one-stop solution for book enthusiasts.',
    href: 'https://github.com/kid-emmanuelle/TiKi_Symfony',
    texture: '/textures/project/project-1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Symfony',
        path: '/assets/symfony.svg',
      },
      {
        id: 2,
        name: 'PHP',
        path: 'assets/php.svg',
      },
      {
        id: 3,
        name: 'SQLite',
        path: '/assets/sqlite.svg',
      },
      {
        id: 4,
        name: 'Twig',
        path: '/assets/twig.svg',
      },
      {
        id: 5,
        name: 'Doctrine',
        path: '/assets/doctrine.svg',
      },
    ],
  },
  {
    title: 'Daylio - A Daily Journal App',
    desc: 'Daylio is a secure and user-friendly daily journal app, built to help users track their moods, activities, and expenses. With a sleek timeline view and robust statistical analysis features, the app provides insights into daily habits while ensuring privacy with strict security measures.',
    subdesc:
      'Developed using Flutter and Firebase, Daylio combines modern design principles from Figma and efficient API management through Postman, making it an ideal tool for users looking to manage their daily life effectively and securely.',
    href: 'https://github.com/kid-emmanuelle',
    texture: '/textures/project/project-3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.svg',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase.svg',
      },
      {
        id: 3,
        name: 'Postman',
        path: '/assets/postman.svg',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/uxui.svg',
      },
    ],
  },
  {
    title: 'EmiratesHotel - A Hotel & Restaurant Management App',
    desc: 'EmiratesHotel is a comprehensive hotel and restaurant management app designed to streamline operations, from managing hotel bookings and restaurant orders to employee and customer management. Built using Java and MySQL, it provides a user-friendly interface for seamless administration of daily operations.',
    subdesc:
      'With Gradle for build automation and CSS for enhanced design, EmiratesHotel ensures efficient management with real-time data visualizations, detailed reports, and a responsive dashboard that simplifies hotel and restaurant operations.',
    href: 'https://github.com/kid-emmanuelle',
    texture: '/textures/project/project-4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
      {
        id: 2,
        name: 'Mysql',
        path: 'assets/mysql.svg',
      },
      {
        id: 3,
        name: 'Gradle',
        path: '/assets/gradle.svg',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css.svg',
      },
    ],
  },
  {
    title: 'Kid-Emmanuelle - My 3D Portfolio',
    desc: 'Kid-Emmanuelle is an interactive 3D portfolio showcasing my skills in modern web development technologies. Built with cutting-edge frameworks like React.js, TailwindCSS, and TypeScript, this project highlights an immersive user experience with dynamic animations powered by Framer Motion. The portfolio not only presents my projects but also demonstrates the creative possibilities of 3D web design.',
    subdesc:
      'By leveraging advanced tools such as React.js and Framer Motion, Kid-Emmanuelle provides an engaging, responsive, and visually appealing experience. Tailored for both desktop and mobile platforms, the portfolio demonstrates real-world applications of TypeScript and TailwindCSS for efficient, scalable, and maintainable codebases. Explore my work and see how modern technology can enhance digital storytelling.',
    href: '',
    texture: '/textures/project/project-5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.5 : isMobile ? 0.6 : 0.65,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Data Vision & Systems',
    pos: 'Apprenticeship in Software & AI Engineer',
    duration: '2023 - Present',
    title:
      "At Data Vision & Systems, I've honed my skills in intelligent automation by contributing to a variety of projects. \n" +
      '➢ My expertise spans from developing user-friendly control interfaces using Arduino to optimizing system performance with custom memory management libraries. \n' +
      "➢ I've also played a key role in creating robust desktop applications for error detection and management, as well as designing and implementing a server to communicate with essential components for bus systems. \n" +
      "➢ Furthermore, I've successfully deployed projects on ARM Linux to reduce hardware costs and implemented innovative wireless solutions with Captive Portal WiFi using OpenWrt.\n" +
      'At my current role, I have frequent opportunities to work with virtual machines (VMWare, Virtual Box, ...) and environments, allowing me to gain hands-on experience with both Linux and Windows server configurations.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'INSA Hauts-de-France',
    pos: 'Apprenticeship & Student in Computer Science',
    duration: '2020 - Present',
    title:
      "During my time at INSA, I developed a comprehensive understanding of data structures, algorithms, security principles, application development methodologies, database management, data mining techniques, artificial intelligence concepts, etc." +
      "I applied this knowledge to a diverse range of projects, including: \n" +
      "➢ A full-stack bookstore website built with Symfony and related technologies\n" +
      "➢ A full-stack hotel management application developed using Java and JavaFX\n" +
      "➢ AI algorithms for various games implemented in C, Java, and Python\n" +
      "➢ A full-stack daily diary app created with Flutter. \n" +
      "To further enhance my skills and explore emerging technologies, I've also undertaken personal projects, such as cloning large websites to analyze their architecture and learn new frameworks like ReactJS, NextJS, and Python.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'SiP',
    pos: 'Project Manager & Designer UX/UI',
    duration: '2020 - 2022',
    title:
      'I was fortunate to be part of a group that founded a side-project forum for the IT community.\n' +
      'This experience provided me with a unique opportunity to learn from talented professionals and develop my programming skills. ' +
      "I'm grateful for the mentorship and support I received from the members of this group.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
];
