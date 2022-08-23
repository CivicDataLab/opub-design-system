import { ChevronRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { styled } from 'stitches.config';

const StyledBreadCrumbs = styled('nav', {
  ol: {
    listStyle: 'none',
    display: 'flex',
    fw: 'wrap',
    gap: '$2',
    alignItems: 'center',
  },

  li: {
    display: 'flex',
    gap: '$2',
    alignItems: 'center',
  },
});

const StyledBreadCrumbsItems = styled('a', {
  fontWeight: 600,
  fontSize: '0.875rem',
  lineHeight: 1.7,
  color: '$breadcrumbs',

  '&:hover': {
    textDecorationThickness: '2px',
  },

  '&[aria-current="page"]': {
    color: '$breadcrumbsAcrive',
    'font-weight': 700,
    'text-decoration': 'none',
  },
});

type Props = {
  children: React.ReactNode[];
  icon?: 'chevron' | 'slash';
};

type ItemsProps = {
  children: React.ReactNode;
  href: string;
};

function BreadCrumbs({ children, icon = 'slash', ...props }: Props) {
  return (
    <StyledBreadCrumbs aria-label="Breadcrumbs" {...props}>
      <ol>
        {children?.map((child: any, index: number) => (
          <li key={child.props.children + index}>
            {child}
            {index !== children.length - 1 &&
              (icon === 'slash' ? <span>/</span> : <ChevronRightIcon />)}
          </li>
        ))}
      </ol>
    </StyledBreadCrumbs>
  );
}

function BreadCrumbsItems({ children, ...props }: ItemsProps) {
  return <StyledBreadCrumbsItems {...props}>{children}</StyledBreadCrumbsItems>;
}

export { BreadCrumbs, BreadCrumbsItems };
