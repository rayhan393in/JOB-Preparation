'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn('grid gap-3', className)}
    {...props}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-4 w-4 rounded-full border border-navy-300 text-navy-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Circle className="h-2.5 w-2.5 fill-current text-white" aria-hidden="true" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export interface RadioFieldProps {
  label: string;
  options: { value: string; label: string; description?: string }[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  error?: string;
  direction?: 'vertical' | 'horizontal';
}

export function RadioField({
  label,
  options,
  value,
  onChange,
  disabled,
  required,
  name,
  error,
  direction = 'vertical',
}: RadioFieldProps) {
  const groupId = name || label.toLowerCase().replace(/\s+/g, '-');
  const errorId = error ? `${groupId}-error` : undefined;

  return (
    <div className="w-full">
      <fieldset>
        <legend className="label-field">
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </legend>
        <RadioGroup
          id={groupId}
          value={value}
          onValueChange={onChange}
          disabled={disabled}
          required={required}
          aria-describedby={errorId}
          className={direction === 'horizontal' ? 'grid-cols-2 md:grid-cols-4 gap-4' : 'gap-3'}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-start gap-3">
              <RadioGroupItem value={option.value} id={`${groupId}-${option.value}`} />
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor={`${groupId}-${option.value}`}
                  className="text-sm font-medium text-navy-900 cursor-pointer"
                >
                  {option.label}
                </label>
                {option.description && (
                  <p className="text-sm text-navy-500">{option.description}</p>
                )}
              </div>
            </div>
          ))}
        </RadioGroup>
      </fieldset>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { RadioGroup, RadioGroupItem };