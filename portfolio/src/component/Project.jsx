

import React, { useEffect } from 'react'
import { Box, Container, HStack, Image, VStack,Flex, SimpleGrid ,Heading} from '@chakra-ui/react';
import { DiGithubBadge } from "react-icons/di";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiChakraui, SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
 import { FaReact } from "react-icons/fa";
 import Tech from "../asset/Project-Img/Tech.png" 
 import Ethical from "../asset/Project-Img/Ethical.png"
 import Pocket from "../asset/Project-Img/Pocket.png"
//  import creaditkarma from "../asset/Project-Img/HealthKarma.png"
import 'aos/dist/aos.css';
import AOS from 'aos';
const Project = () => {
  const logoarr=[{logo:<SiHtml5 />,text:"HTML"},{logo:<SiCss3 />,text:"Css"},{logo:<SiJavascript />,text:"Javascript"},{logo:<FaReact />,text:"React"},{logo:<SiChakraui />,text:"Chakraui"}]
  
  const Featuresarr=["Login","Signup","Sort","Filter","Cart","Payment"]
  const projectdata=[
    {img:Ethical,title:"Ethical Threads",des:"Hevenly Heven Ecommerce Website This is an ecommerce website built for selling products online. The website provides a platform for customers to browse and purchase products conveniently from the comfort of their homes.",logoarr,Featuresarr
    ,github:"https://github.com/vaibhav-panwar/coherent-mother-3147/tree/main",deploy:"https://cheery-donut-801eae.netlify.app/"},
    {img:Tech,title:"Tech Bazar",des:"Tech Bazar is an Ecommerce website which deals in all kind of electronic devices.",
    logoarr,Featuresarr,github:"https://github.com/neo1710/-remarkable-ic",deploy:"https://techbazar-app.vercel.app/"},
    {img:Pocket,title:"Pocket Shop",des:"Pocket Shop designs and sells a wide range of clothing items, including t-shirts, hoodies etc..",logoarr,Featuresarr,github:"https://github.com/ashu7982/damp-bite-3145/tree/main",deploy:"https://poetic-malasada-b57bf8.netlify.app"},
    
    {img:Pocket,title:"My Portfolio",des:"My Portfolio.",logoarr,Featuresarr,github:"https://github.com/Diwakarsharma2216/long-head-3582",deploy:"ashu7982.github.io/"},
   
  ]


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div id="projects">
    <Heading data-aos="fade-left" textAlign={"center"} mt={"9"}  fontWeight={"extrabold"} color={"whiteAlpha.800"}>My Project</Heading>
    <Container maxW={"container.xl"}>
      {projectdata.map((el)=><Box
    w='100%'
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    h={{base:"740px",md:"400px"}}
    bgGradient="linear(to-r, #9797ad, #142041)"
    borderRadius='xl'
    boxShadow='2xl'
    p={8}
    m="2.5"
    className="project-card"
  >
  <SimpleGrid columns={{base:1,md:2}} >
    <Box boxShadow={"dark-lg"}  ><Image src={el.img}  height={{base:"200px",md:"350px"}}   alt="diwa"/></Box>
    <Box   mt={{base:"5",md:"1"}}  ml={{base:"1",md:"5"}} border={"2px solid grey"}>
      <VStack>
        <Box  color={"whiteAlpha.900"} fontWeight={"extrabold"} fontSize={"4xl"} className="project-title" >{el.title}</Box>
        <Box color={"whiteAlpha.900"} fontWeight={"bold"} fontSize={"1.5xl"} className="project-description"  textAlign={"left"}>{el.des}</Box>
        <Box mt={"5"}>
          <HStack    fontSize={"4xl"} color={"cyan.100"} spacing={6}>
          <Box className="project-tech-stack">
            <SimpleGrid  columns={{base:3,md:5}} spacing={2} textAlign={"center"} >
             
            {
              logoarr.map((el)=> <Box boxShadow={"dark-lg"} >
              <Box textAlign={"center"} margin={"auto"} fontSize={"2xl"}>{el.logo}</Box>
              {/* <Box fontSize={"20px"}>{el.text}</Box> */}
            </Box>)
            
           
            }
         
             </SimpleGrid>
             </Box>
             
              {/* <Box boxShadow={"dark-lg"}>
              <Box fontSize={"2xl"}><SiJavascript /></Box>
                <Box  fontSize={"20px"}>Javascript</Box> 
                </Box>
              <Box boxShadow={"dark-lg"} >
              <Box fontSize={"2xl"} textAlign={"center"}><SiCss3 /></Box>
                <Box fontSize={"20px"}>CSS</Box>  
                </Box> */}
          </HStack>
        </Box>
        <Box>
          <HStack ml={"-25px"} mt={"2.5"} fontSize={"4xl"} color={"cyan"} spacing={6}>
            <Box className="project-github-link"><a href={el.github}><DiGithubBadge /></a></Box>
            <Box className="project-deployed-link"><a href={el.deploy}><BsBoxArrowUpRight /></a></Box>
          </HStack>
        </Box>
      
      </VStack>
    </Box>
  </SimpleGrid>
  
  </Box>)}
  
  </Container>
  </div>
  )
}

export default Project