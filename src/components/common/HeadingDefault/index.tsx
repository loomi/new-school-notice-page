import { Heading } from '@chakra-ui/react';
import React from 'react';

type HeadingDefaultType = {
  color: string;
  text: string;
};

export const HeadingDefault: React.FC<HeadingDefaultType> = ({ color, text }) => {
  return (
    <Heading
      textTransform="uppercase"
      as="h2"
      color={`${color}`}
      fontSize={['3.5rem', '5rem']}
      fontFamily="calibri"
      position="relative"
      zIndex={2}
      sx={{
        ':after': {
          content: `"${text}"`,
          textTransform: 'uppercase',
          left: 1,
          position: 'absolute',
          color: 'transparent',
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': `${color}`,
        },
      }}
    >
      {text}
    </Heading>
  );
};
