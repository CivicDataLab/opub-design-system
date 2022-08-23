import React, { ReactNode } from 'react';
import { styled, keyframes } from '@stitches/react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: '$backgroundLighter',
  zIndex: '$max',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const HoverCardArrow = styled(HoverCardPrimitive.Arrow, {
  fill: 'white',
});
type Props = {
  children?: ReactNode;
  arrow?: boolean;
};
type DropdownVariants = React.ComponentProps<typeof StyledContent>;
type DropdownContentProps = DropdownVariants & Props;

function Content({ children, arrow = false, ...props }: DropdownContentProps) {
  return (
    <HoverCardPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        {arrow && <HoverCardArrow />}
      </StyledContent>
    </HoverCardPrimitive.Portal>
  );
}

// Exports
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardContent = Content;

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardArrow };
