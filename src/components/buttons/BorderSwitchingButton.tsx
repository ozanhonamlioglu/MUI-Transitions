import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BorderSwitchingButton = styled(Button)(({ theme }) => ({
  border: 0,
  fontSize: 18,
  padding: 20,
  paddingLeft: 40,
  paddingRight: 40,
  letterSpacing: 3,
  color: '#333',
  '&:hover': {
    backgroundColor: 'transparent',
    border: 0
  },
  '&::before': {
    content: '""',
    width: '120%',
    height: '100%',
    position: 'absolute',
    top: 0,
    borderTop: `2px solid ${theme.palette.warning.main}`,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    transition: 'all 500ms'
  },
  '&::after': {
    content: '""',
    width: '100%',
    height: '130%',
    position: 'absolute',
    left: 0,
    borderLeft: `2px solid ${theme.palette.warning.main}`,
    borderRight: `2px solid ${theme.palette.secondary.main}`,
    transition: 'all 500ms'
  },
  '&:hover::before': {
    transform: 'rotateX(180deg)'
  },
  '&:hover::after': {
    transform: 'rotateY(180deg)'
  }
}));

export default BorderSwitchingButton;
