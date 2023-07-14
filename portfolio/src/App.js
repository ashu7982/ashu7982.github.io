// import logo from './logo.svg';
// import './App.css';


    
//     import { Box, Text, Button, Link, Grid, GridItem } from "@chakra-ui/react";
//     // import { ReactGithubCalendar } from "react-github-calendar";
    
//     function App() {
//       return (
//         <Box>
//           <Box as="nav" id="nav-menu">
//             <Grid templateColumns="repeat(6, 1fr)" gap={4}>
//               <GridItem>
//                 <Link className="nav-link home" href="#home">
//                   Home
//                 </Link>
//               </GridItem>
//               <GridItem>
//                 <Link className="nav-link about" href="#about">
//                   About
//                 </Link>
//               </GridItem>
//               <GridItem>
//                 <Link className="nav-link skills" href="#skills">
//                   Skills
//                 </Link>
//               </GridItem>
//               <GridItem>
//                 <Link className="nav-link projects" href="#projects">
//                   Projects
//                 </Link>
//               </GridItem>
//               <GridItem>
//                 <Link className="nav-link contact" href="#contact">
//                   Contact
//                 </Link>
//               </GridItem>
//               <GridItem>
//                 <Link
//                   className="nav-link resume"
//                   href="/path/to/resume.pdf"
//                   isExternal
//                 >
//                   Resume
//                 </Link>
//               </GridItem>
//             </Grid>
//           </Box>
    
//           <Box as="section" id="home">
//             <Text id="user-detail-name" fontSize="4xl" fontWeight="bold">
//               Ashutosh Dubey
//             </Text>
//             <Text id="user-detail-intro">Formal introduction</Text>
//             <Box
//               as="img"
//               src="https://avatars.githubusercontent.com/u/119420001?v=4"
//               alt="Professional Photo"
//               className="home-img"
//             />
//           </Box>
    
//           <Box as="section" id="about" className="about section">
//             <Text as="h2" fontSize="3xl" fontWeight="bold">
//               About
//             </Text>
//             {/* Add your about content here */}
//           </Box>
    
//           <Box as="section" id="skills">
//             <Text as="h2" fontSize="3xl" fontWeight="bold">
//               Skills
//             </Text>
//             <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//               <Box className="skills-card">
//                 <Box as="img" src="/path/to/skill1.jpg" alt="Skill 1" />
//                 <Text className="skills-card-name">Skill 1 Name</Text>
//               </Box>
//               <Box className="skills-card">
//                 <Box as="img" src="/path/to/skill2.jpg" alt="Skill 2" />
//                 <Text className="skills-card-name">Skill 2 Name</Text>
//               </Box>
//               {/* Add more skills cards as needed */}
//             </Grid>
//           </Box>
    
//           <Box as="section" id="projects">
//             <Text as="h2" fontSize="3xl" fontWeight="bold">
//               Projects
//             </Text>
//             <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//               <Box className="project-card">
//                 <Box as="img" src="/path/to/project1.jpg" alt="Project 1" />
//                 <Text as="h3" className="project-title">
//                   Project 1 Title
//                 </Text>
//                 <Text className="project-description">Project 1 description</Text>
//                 <Text className="project-tech-stack">
//                   Tech Stack: Technologies used in Project 1
//                 </Text>
//                 <Link
//                   className="project-github-link"
//                   href="https://github.com/your-project1-repo"
//                   isExternal
//                 >
//                   GitHub Repository
//                 </Link>
//                 <Link
//                   className="project-deployed-link"
//                   href="https://your-project1-deployed-link"
//                   isExternal
//                 >
//                   Deployed Link
//                 </Link>
//               </Box>
//               <Box className="project-card">
//                 <Box as="img" src="/path/to/project2.jpg" alt="Project 2" />
//                 <Text as="h3" className="project-title">
//                   Project 2 Title
//                 </Text>
//                 <Text className="project-description">Project 2 description</Text>
//                 <Text className="project-tech-stack">
//                   Tech Stack: Technologies used in Project 2
//                 </Text>
//                 <Link
//                   className="project-github-link"
//                   href="https://github.com/your-project2-repo"
//                   isExternal
//                 >
//                   GitHub Repository
//                 </Link>
//                 <Link
//                   className="project-deployed-link"
//                   href="https://your-project2-deployed-link"
//                   isExternal
//                 >
//                   Deployed Link
//                 </Link>
//               </Box>
//               {/* Add more project cards as needed */}
//             </Grid>
//           </Box>
    
//           <Box as="section" id="contact">
//             <Text as="h2" fontSize="3xl" fontWeight="bold">
//               Contact
//             </Text>
//             <Link id="contact-github" href="https://github.com/your-github-profile" isExternal>
//               GitHub
//             </Link>
//             <Link
//               id="contact-linkedin"
//               href="https://www.linkedin.com/in/your-linkedin-profile"
//               isExternal
//             >
//               LinkedIn
//             </Link>
//             <Text id="contact-phone">7982460902</Text>
//             <Text id="contact-email">ashutoshdubey7982@gmail.com</Text>
//           </Box>
    
//           <Box as="section">
//             <Text as="h2" fontSize="3xl" fontWeight="bold">
//               Resume
//             </Text>
//             <Button
//               id="resume-button-1"
//               onClick={() => window.open("/path/to/resume.pdf", "_blank")}
//             >
//               Download Resume
//             </Button>
//           </Box>
    
//           <Box as="section">
//             <Text as="h2" fontSize="3xl" fontWeight="bold">
//               Github Stats
//             </Text>
//             {/* <ReactGithubCalendar className="react-activity-calendar" username="ashu7982" /> */}
//             <Box as="img" id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/demo/" alt="GitHub Streak Stats" />
//             <Box as="img" id="github-top-langs" src="https://github.com/anuraghazra/github-readme-stats" alt="GitHub Top Languages" />
//             <Box as="img" id="github-stats-card" src="https://github.com/anuraghazra/github-readme-stats" alt="GitHub Stats Card" />
//           </Box>
//         </Box>
//       );
//     }
    
//     // export default App;

 

// export default App;






import { Heading,Text,Box } from '@chakra-ui/react';
import About from './component/About';
import  ContactUs  from './component/Contact';
import Github from './component/Github';
import Home from './component/Home';
import ColorModeToggle from './component/Navbar';
import { AiOutlineCaretUp } from "react-icons/ai";
import Navbar from './component/Navbar';
import Project from './component/Project';
import Skills from './component/Skills';

function App() {
  return (
    <div  >
     <ColorModeToggle />
     <Home />
     <About />
     <Skills />
     <Project />
     <Github />
     <ContactUs />
    <Box textAlign={"center"} m={{base:"1vh"}}>
      <Box><Text fontWeight="bold" color={"whiteAlpha.900"}>Developed by<AiOutlineCaretUp fontSize={"2xl"} m /></Text></Box>
      <Text color="red.500" fontSize="2xl" mt="2">
        Ashutosh dubey
      </Text>
      </Box>
    </div>
  );
}

export default App;
