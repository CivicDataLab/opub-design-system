import React from 'react';
import { styled } from 'stitches.config';

const StyledAside = styled('aside', {
  'border-radius': '2px',
  'background-color': '#EBF0EE',
  p: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const Title = styled('span', {
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.7,
});

type Props = {
  title: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
};

function Aside({ icon, title, ...props }: Props) {
  return (
    <StyledAside {...props}>
      {icon}
      <Title>{title}</Title>
    </StyledAside>
  );
}

export { Aside };
