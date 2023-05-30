import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledAppBarListLinks = styled(Box)(({ theme }) => ({
  '& > .MuiButton-root': {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 2,
      backgroundColor: theme.palette.text.primary,
      transition: 'all 0.5s',
      transform: 'scaleX(0)',
      transformOrigin: 'left'
    },
    '&:hover::before': {
      transform: 'scaleX(1)'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '100%',
      height: 2,
      backgroundColor: theme.palette.text.primary,
      transition: 'all 0.5s',
      transform: 'scaleX(0)',
      transformOrigin: 'right'
    },
    '&:hover::after': {
      transform: 'scaleX(1)'
    }
  }
}));

const GrowingBorderMenu: React.FC<{ pages: string[] }> = ({ pages }) => {
  return (
    <StyledAppBarListLinks>
      {pages.map((page, index) => (
        <Button key={index} color="inherit" disableRipple>
          <Typography color={'textPrimary'}>{page}</Typography>
        </Button>
      ))}
    </StyledAppBarListLinks>
  );
};

export default GrowingBorderMenu;
