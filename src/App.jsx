import { useState } from 'react';
import { Text, Box, ButtonGroup, Grid } from '@chakra-ui/react'
import ReactFlagsSelect from "react-flags-select";
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
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
      <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4} alignItems="center">
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
          <Text
            bgGradient='linear(to-l, #000, #fff)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'
          >
          {currentTranslations.title}
          </Text>
          <p>{currentTranslations.subtitle}</p>
          <p>{currentTranslations.about}</p>


          <Box id="socialb" class="col-sm">
            <a href="https://www.instagram.com/juanpfrancos/"><FaInstagram/></a>
            <a href="https://twitter.com/JuanpFrancoS"><FaTwitter/></a>
            <a href="https://co.linkedin.com/in/juanpfrancos"><FaLinkedin/></a> 
            <a href="https://api.whatsapp.com/send?phone=573166245103"><FaWhatsapp/></a>
          </Box>
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
