

import { SimpleGrid ,Box, Container, HStack,Text, Button, Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {  FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AOS from "aos";

import "aos/dist/aos.css";
import { FiLinkedin } from "react-icons/fi";
import Typewriter from "typewriter-effect"
import { VStack } from '@chakra-ui/react';
// import HexagonProfilePic from './HexagonProfilePic';
import myimg from "../asset/profile.png";
import { BsFillTelephoneFill } from 'react-icons/bs';
import HexagonProfilePic from './HexagonProfilePic';
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="home" >
      <Container maxW={"container.xl"} mt={"20px"}>
<SimpleGrid columns={{base:1,md:2}} gap={10}>
  <Box >
  <VStack align="start" data-aos="fade-right">
   <Box> <Text color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"2xl",md:"4xl"}}>Hello, It's Me</Text></Box>
    <Box id="user-detail-name"><Text  color={'whiteAlpha.900 '} fontStyle={"bold"} fontSize={{base:"3xl",md:"5xl"}}>Ashutosh Dubey</Text></Box>
    <Box color={'whiteAlpha.700'} fontStyle={"bold"} fontSize={{base:"2xl",md:"4xl"}}>And I'm a<span style={{color:"cyan"}}><Typewriter
options={{
strings: ['Full Stack Web Developer', 'Mern Developer', 'Front-End Developer'],
autoStart: true,
loop: true,
}}
/></span></Box>
  <HStack>
   <Box mt={2}><Button><a href='/#projects'>SEE MY WORK</a></Button></Box>
   <Box>
   <Button mt={2} >
   <a id="resume-button-2"  href=" https://drive.google.com/uc?export=download&id=1EemOHfwwAVSxQB1wz_qnVbk52YdO2jFp" target="_blank" rel="noreferrer" download="Ashutosh-Dubey-Resume.pdf">Resume</a>
    </Button>
   </Box>
   </HStack>
   <Box>
    <HStack  mt={2} spacing={"7"}>
      <Box  id="contact-email"> <a  id="contact-email" href="https://ashutoshdubey7982@gmail.com"><Box fontSize={"30px"} color={"cyan.100"}><SiGmail /></Box></a></Box>
      <Box id="contact-linkedin"> <a target="_blank" href='https://www.linkedin.com/in/ashutosh-dubey-a62154257/'> <Box fontSize={"30px"} color={"cyan.100"}><FiLinkedin /></Box></a></Box>
      <Box  id="contact-phone"> <a id="contact-phone" href="tel:+91-7982460902"><Box fontSize={"30px"} color={"cyan.100"}><BsFillTelephoneFill /></Box></a></Box>
      <Box  id="contact-github"> <a target="_blank" id="contact-github" href='https://github.com/ashu7982'><Box fontSize={"30px"} color={"cyan.100"}><FaGithubSquare /></Box></a></Box>
    </HStack>
   </Box>
  </VStack>
</Box>



<div  textAlign={"center"} data-aos="fade-left" borderRadius={"50%"}  >
  <HexagonProfilePic name="Ashutosh Dubey" src={myimg} />

  </div >
</SimpleGrid>
</Container>
    </div>
   
  )
}

export default Home