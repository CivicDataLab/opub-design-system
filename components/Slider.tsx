import React from 'react';
import { styled, CSS } from '../stitches.config';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { blackA, violet } from '@radix-ui/colors';

const SliderTrack = styled(SliderPrimitive.Track, {
  position: 'relative',
  flexGrow: 1,
  backgroundColor: '$slate7',
  borderRadius: '$pill',
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100,
  },
});

const SliderRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  background: '$blue9',
  borderRadius: 'inherit',
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
});

const SliderThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  boxShadow: '$boxShadow',
  borderRadius: 10,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 5px ${blackA.blackA8}` },
});

export const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  userSelect: 'none',
  touchAction: 'none',
  height: 15,
  flexGrow: 1,

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },

  '@hover': {
    '&:hover': {
      [`& ${SliderTrack}`]: {
        backgroundColor: '$slate8',
      },
      [`& ${SliderThumb}`]: {
        opacity: '1',
      },
    },
  },
});

type SliderPrimitiveProps = React.ComponentProps<typeof SliderPrimitive.Root>;
type SliderProps = SliderPrimitiveProps & { css?: CSS };

export const Slider = React.forwardRef<React.ElementRef<typeof StyledSlider>, SliderProps>(
  (props, forwardedRef) => {
    const hasRange = Array.isArray(props.defaultValue || (props as any).value);
    const thumbsArray = hasRange
      ? props.defaultValue || (props as any).value
      : [props.defaultValue || (props as any).value];

    return (
      <StyledSlider {...props} ref={forwardedRef}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {thumbsArray.map((_: any, i: number) => (
          <SliderThumb key={i} />
        ))}
      </StyledSlider>
    );
  }
);
