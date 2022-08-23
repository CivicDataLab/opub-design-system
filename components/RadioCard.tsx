import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export const RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block',
});

export const StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: 25,
  height: 25,
  boxShadow: 'inset 0 0 0 1px $colors$formBoundary',
  flexShrink: 0,
  mr: '$3',
});

export const StyledRadioIndicator = styled('div', {
  borderRadius: '$round',
  width: 15,
  height: 15,
  backgroundColor: '$formSelected',
  transform: 'scale(0)',
});

export const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$formBoundary',
  p: '$3',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$formHover',
    },
  },
  '&[data-state="checked"]': {
    boxShadow: 'inset 0 0 0 1px $colors$formFocus, 0 0 0 1px $colors$formFocus !important',
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
});

type RadioGroupItemPrimitiveProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>;
type RadioCardProps = RadioGroupItemPrimitiveProps & { css?: CSS };

export const RadioCard = React.forwardRef<React.ElementRef<typeof StyledRadio>, RadioCardProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledRadioButton>
        <StyledRadioIndicator />
      </StyledRadioButton>
      {props.children}
    </StyledRadio>
  )
);
