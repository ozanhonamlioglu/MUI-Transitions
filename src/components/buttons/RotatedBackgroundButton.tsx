import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';

export const shouldForwardProp = <CustomProps extends Record<string, unknown>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey
): boolean => !props.includes(prop as string);

type CustomProps = {
  text: string;
};

const AnimatedButton = styled(Button, { shouldForwardProp: (props) => shouldForwardProp(['text'], props) })<CustomProps>(
  ({ theme, text }) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.font = '30px Roboto';
    }
    const mText = ctx?.measureText(text);

    return {
      border: 0,
      fontSize: 18,
      height: 80,
      width: (mText?.width || 1) + 40,
      letterSpacing: 3,
      color: '#333',
      '& span': {
        transition: 'all 500ms'
      },
      '&:hover': {
        backgroundColor: 'transparent',
        border: 0
      },
      '&::before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.warning.main,
        zIndex: -1,
        opacity: 0,
        transition: 'all 500ms'
      },
      '&:hover::before': {
        opacity: 1,
        transform: 'rotate(15deg)'
      },
      '&:hover span': {
        transform: 'rotate(-720deg)',
        fontSize: 80,
        fontWeight: 900
      }
    };
  }
);

const RotatedBackgroundButton = ({ text }: { text: string }) => {
  const firstLetter = text[0];
  const rest = text.slice(1);

  return (
    <AnimatedButton disableRipple text={text}>
      <span>{firstLetter}</span>
      {rest}
    </AnimatedButton>
  );
};

export default RotatedBackgroundButton;
