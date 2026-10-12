import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full relative flex flex-col gap-1">
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-md border border-dark-200 bg-dark-100/50 px-3 py-2 text-sm text-foreground",
            "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 mt-1 absolute -bottom-5 left-0">{error}</span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
