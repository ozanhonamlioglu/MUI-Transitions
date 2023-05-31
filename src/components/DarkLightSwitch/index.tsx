import { styled } from '@mui/material';
import Switch from '@mui/material/Switch';
import React from 'react';

import { useThemeContext, useThemeDispatchContext } from 'hooks/useThemeContext';

const TheSwitch = styled(Switch)(({ theme }) => ({
  '&.MuiSwitch-root': {
    width: '120px',
    height: '60px'
  },
  '& .MuiSwitch-switchBase': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '6px',
    left: '8px',
    transition: 'all 0.5s'
  },
  '& .MuiSwitch-track': {
    borderRadius: '60px',
    backgroundColor: 'transparent',
    opacity: 0.5,
    transition: 'all 0.5s',
    overflow: 'hidden',
    position: 'relative'
  },
  '& .MuiSwitch-thumb': {
    width: '30px',
    height: '30px',
    backgroundColor: theme.palette.warning.light,
    transition: 'all 0.5s',
    position: 'relative'
  },
  '& .MuiSwitch-thumb::before': {
    content: '""',
    width: '80%',
    height: '80%',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.grey[200],
    borderRadius: '100%',
    opacity: 0,
    transition: 'all 0.5s'
  },
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb::before': {
    opacity: 1
  },
  '& .Mui-checked': {
    transform: 'translateX(56px) !important',
    transition: 'all 0.5s'
  },
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
    backgroundColor: theme.palette.common.white
  },
  '& .MuiSwitch-switchBase:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0) !important'
  },
  '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
    backgroundColor: 'transparent'
  },
  '& .MuiSwitch-track::before': {
    // Night
    content: '""',
    width: '200%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    background: `url(stars.svg), ${theme.palette.primary.light}`,
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
    transition: 'all 0.5s',
    transform: 'translateX(-100%)',
    opacity: 0,
    borderRadius: '60px'
  },
  '& .MuiSwitch-track::after': {
    // Sun
    content: '""',
    width: '200%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: 1,
    background: `url(clouds.svg), ${theme.palette.primary.light}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100px -10px',
    zIndex: -1,
    transition: 'all 0.5s',
    transform: 'translateX(0%)',
    borderRadius: '60px'
  },
  '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track::before': {
    transform: 'translateX(0)',
    opacity: 1
  },
  '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track::after': {
    transform: 'translateX(100%)',
    opacity: 0
  }
}));

const SunAndMoonSwitch: React.FC = () => {
  const theme = useThemeContext();
  const dispatch = useThemeDispatchContext();

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch?.({ type: 'changeThemeMode', payload: checked ? 'dark' : 'light' });
  };

  return <TheSwitch disableRipple checked={theme?.mode === 'dark'} onChange={handleSwitch} />;
};

export default SunAndMoonSwitch;
