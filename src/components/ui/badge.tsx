'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-navy-100 text-navy-800 hover:bg-navy-100/80',
        secondary: 'border-transparent bg-navy-100 text-navy-800 hover:bg-navy-100/80',
        destructive: 'border-transparent bg-red-100 text-red-800 hover:bg-red-100/80',
        outline: 'text-navy-700 border-navy-200',
        success: 'border-transparent bg-green-100 text-green-800 hover:bg-green-100/80',
        warning: 'border-transparent bg-amber-100 text-amber-800 hover:bg-amber-100/80',
        info: 'border-transparent bg-blue-100 text-blue-800 hover:bg-blue-100/80',
        primary: 'border-transparent bg-navy-100 text-navy-800 hover:bg-navy-100/80',
      },
      size: {
        default: 'px-2.5 py-0.5 text-xs',
        sm: 'px-2 py-0.5 text-[10px]',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size, className }))} {...props} />;
}

export { Badge, badgeVariants };