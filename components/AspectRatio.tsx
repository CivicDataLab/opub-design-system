import React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

type AspectRatioProps = React.ComponentProps<typeof AspectRatioPrimitive.Root> & {
  // Image ratio, eg: 1, 4/3, 16/9. Default: 1
  ratio?: number;
};

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ children, ...props }, forwardRef) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: { width: '100%', 'object-fit': 'cover', height: '100%' },
      });
    }

    return child;
  });

  return (
    <AspectRatioPrimitive.Root ratio={props.ratio} {...props} asChild ref={forwardRef}>
      {childrenWithProps?.length ? childrenWithProps[0] : childrenWithProps}
    </AspectRatioPrimitive.Root>
  );
});

export { AspectRatio };
