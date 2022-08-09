export const styles = {
  global: () => ({
    html: {
      bg: 'purple.500',
      minH: '100vh',
    },
    body: {
      bg: 'purple.500',
      h: '100%',
      color: 'white.500',
      WebkitTapHighlightColor: 'transparent',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
  }),
};
