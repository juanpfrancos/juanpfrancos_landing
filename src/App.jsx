import { useState } from 'react';
import { Box, Text,ButtonGroup, Grid, HStack} from '@chakra-ui/react'
import ReactFlagsSelect from "react-flags-select";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "../public/original.png";
import Reducedimg from "../public/reduced.jpg";
import US from './langs/us';
import ES from './langs/es';
import PT from './langs/pt';

function App() {
  const showSelectedLabel = false;
  const showOptionLabel = false;
  const searchable = false;    
  const [language, setLanguage] = useState('US');
  const onSelect = (code) => setLanguage(code);
  const translations = {
    US,
    ES,
    PT,
  };

  const currentTranslations = translations[language];

  return (
    <>
      <Box p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr' }} gap={4}>
        <ButtonGroup gap='2'>
            <ReactFlagsSelect
            selected={language}
            onSelect={onSelect}
            showSelectedLabel={showSelectedLabel}
            showOptionLabel={showOptionLabel}
            countries={["US","ES","PT"]}
            searchable={searchable}
            placeholder={language}
            />
        </ButtonGroup>
      </Grid>
    </Box>
    <Box
      textAlign="center"
      px={{ base: "5%", sm: "10%", md: "15%", lg: "20%" }}
    >
      <LazyLoadImage 
          src={Img} 
          alt="Me" 
          style={{ width: '200px', margin: '0', padding: '0', borderRadius: '50%'}} 
          placeholderSrc={Reducedimg}
          effect="blur"
          />
      <Text
          bgGradient='linear(to-l, #000, #fff)'
          bgClip='text'
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight='extrabold'
        >
          {currentTranslations.title}
        </Text>            
        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
          {currentTranslations.about}
        </Text>
        <HStack spacing='24px' align='center' justifyContent='center'  style={{paddingBottom: '2em'}} >
          <a href="https://github.com/juanpfrancoS"><FaGithub fontSize='3em'/></a>
          <a href="https://co.linkedin.com/in/juanpfrancos"><FaLinkedin fontSize='3em'/></a> 
          <a href="https://api.whatsapp.com/send?phone=351925237446"><FaWhatsapp fontSize='3em'/></a>
        </HStack>
    </Box>
    </>
  );
}

export default App;
