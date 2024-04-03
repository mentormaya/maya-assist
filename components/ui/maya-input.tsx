import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showClearButton?: boolean;
  clearButton?: React.ReactNode;
  clear?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, showClearButton = false, clearButton = 'x', clear, className, type, value, ...props }, ref) => {
    const [dirty, setDirty] = useState(value !== '');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const inputValue = e.target.value.trim();
      setDirty(inputValue !== '');
      if (onChange) onChange(e);
    };

    const handleClear = () => {
      setDirty(false);
      if (ref && 'current' in ref && ref.current) {
        (ref as React.MutableRefObject<HTMLInputElement>).current.value = '';
      }
      if (clear) clear();
    };

    return (
      <div className="relative">
        <input
          type={type}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${dirty ? 'pr-10' : ''} ${className}`}
          ref={ref}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {showClearButton && dirty && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-red-500"
            type="reset"
            onClick={handleClear}
          >
            {clearButton}
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
