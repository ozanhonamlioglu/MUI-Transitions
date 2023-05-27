import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BorderGrowingButton = styled(Button)(({ theme }) => ({
  border: 0,
  fontSize: 18,
  padding: 20,
  paddingLeft: 40,
  paddingRight: 40,
  letterSpacing: 3,
  backgroundColor: theme.palette.warning.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.warning.main,
    border: 0
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '40%',
    height: '40%',
    top: -10,
    left: -10,
    borderLeft: `2px solid ${theme.palette.warning.main}`,
    borderTop: `2px solid ${theme.palette.warning.main}`,
    transition: 'all 500ms'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '40%',
    height: '40%',
    bottom: -10,
    right: -10,
    borderRight: `2px solid ${theme.palette.warning.main}`,
    borderBottom: `2px solid ${theme.palette.warning.main}`,
    transition: 'all 500ms'
  },
  '&:hover::before': {
    width: '100%',
    height: '100%'
  },
  '&:hover::after': {
    width: '100%',
    height: '100%'
  }
}));

export default BorderGrowingButton;
