import React from 'react';
import { styled } from 'stitches.config';

const StyledAside = styled('aside', {
  'border-top': '4px solid $colors$primary',
  br: '4px',
  px: '4px',

  '@bp1': {
    'border-top': 'none',
    pl: '18px',
    'border-left': '4px solid $colors$primary',
  },
});

const Title = styled('span', {
  fontWeight: '$1',
  fontSize: '$3',
  lineHeight: 1.5,
  'letter-spacing': '0.01em',
});

type Props = {
  title: React.ReactNode;
};

function Aside({ title, ...props }: Props) {
  return (
    <StyledAside {...props}>
      <Title>{title}</Title>
    </StyledAside>
  );
}

export { Aside };
