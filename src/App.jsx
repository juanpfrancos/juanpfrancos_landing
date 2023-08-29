import { useState } from 'react';
import { Text, Box, ButtonGroup, Grid, HStack } from '@chakra-ui/react'
import ReactFlagsSelect from "react-flags-select";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
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
      <Box p={0}>
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
        <Box>
        <ButtonGroup gap='2'>
            <ReactFlagsSelect
            selected={language}
            onSelect={onSelect}
            showSelectedLabel={showSelectedLabel}
            showOptionLabel={showOptionLabel}
            countries={["PT", "US", "ES"]}
            searchable={searchable}
            placeholder={language}
            />
          </ButtonGroup>

          <Box maxW="800px" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 8, md: 12 }}>
            <Text
              bgGradient='linear(to-l, #000, #fff)'
              bgClip='text'
              fontSize={{ base: "4xl", md: "7xl" }}
              fontWeight='extrabold'
            >
              {currentTranslations.title}
            </Text>            
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
              {currentTranslations.about}
            </Text>
          </Box>
          <HStack spacing='24px' align='center' justifyContent='center'>
            <a href="https://github.com/juanpfrancoS"><FaGithub fontSize='3em'/></a>
            <a href="https://co.linkedin.com/in/juanpfrancos"><FaLinkedin fontSize='3em'/></a> 
            <a href="https://api.whatsapp.com/send?phone=573166245103"><FaWhatsapp fontSize='3em'/></a>
          </HStack>
        </Box>

        {/* Columna de imagen */}
        <Box
          display={{ base: 'none', lg: 'block' }}
          gridColumn={{ base: '1', lg: '2' }}
        >
          <img src="https://raw.githubusercontent.com/juanpfrancos/juanpfrancos/master/Juanp.png" alt="Me" style={{ width: '100%', margin: '0', padding: '0' }} />
        </Box>

        {/* Imagen para dispositivos móviles */}
        <Box
          display={{ base: 'block', lg: 'none' }}
          gridColumn={{ base: '1', lg: '2' }}
        >
          <img src="https://raw.githubusercontent.com/juanpfrancos/juanpfrancos/master/Juanp.png" alt="Me" style={{ width: '100%', margin: '0', padding: '0' }} />
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
