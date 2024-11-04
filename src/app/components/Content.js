'use client';
import { Box, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Filters from './Filters';
import Footer from './Footer';
import { Tournaments } from './Tournaments';
import { useState } from 'react';
import ChakraNextLink from './Link';

export default function Content({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (updatedData) => {
    setFilteredData(updatedData);
  };
  return (
    <Box maxW={'1440px'} margin={'auto'} backgroundColor={'#F1F1F1'}>
      <Box pt={{ sm: '80%', md: '60%', lg: '40%' }} position={'relative'}>
        <Image
          src={'/celebrating.webp'} // Replace with your image path
          alt='Image description'
          fill
          priority
        />
        <ChakraNextLink href={'/'}>
          <Text
            position={'absolute'}
            top={'3%'}
            left={'3%'}
            zIndex={2}
            color={'white'}
            fontSize={{
              sm: '2xs',
              md: 'large',
              lg: 'x-large',
              xl: 'xx-large',
            }}
          >
            allacuper.se
          </Text>
        </ChakraNextLink>
        <Center
          height={'100%'}
          position={'absolute'}
          width={'100%'}
          top={0}
          backgroundColor={'rgba(0, 0, 0, 0.6)'}
        >
          {data && <Filters data={data} onFilter={handleFilter}></Filters>}
        </Center>
      </Box>
      {filteredData && <Tournaments tournaments={filteredData}></Tournaments>}
      <Footer></Footer>
    </Box>
  );
}
