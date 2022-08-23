import React from 'react';
import { styled } from 'stitches.config';

const StyledBanner = styled('div', {
  'border-radius': '2px',
  'background-color': '$bannerBg',
  p: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  lineHeight: 1.7,
});

const Title = styled('span', {
  fontWeight: '$1',
  fontSize: '$1',
  lineHeight: 1.7,
  variants: {
    bold: {
      true: {
        fontWeight: '$3',
      },
    },
  },
});

type Props = {
  title: React.ReactNode;
  icon?: React.ReactNode;
  bold?: boolean;
};
function Banner({ icon, title, bold = false }: Props) {
  return (
    <StyledBanner>
      {icon && icon}
      <Title bold={bold}>{title}</Title>
    </StyledBanner>
  );
}

export { Banner };
