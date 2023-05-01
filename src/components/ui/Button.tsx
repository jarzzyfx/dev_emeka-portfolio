"use client"
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { FC, ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex gap-2 items-center justify-center rounded-md text-sm font-medium transition-border focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-all",
  {
    variants: {
      variant: {
        default: " bg-indigo-700 hover:border-solid border-2 border-indigo-600 hover:bg-transparent text-white hover:text-indigo-700",
        ghost: "bg-transparent underline  underline-offset-6 text-indigo-700 hover:bg-indigo-700 hover:bg-opacity-10",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ children, isLoading, variant, size, className, ...props }) => {
  return (
    <button className={cn(buttonVariants({variant, size, className}))} disabled={isLoading} {...props}>
      {isLoading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin"/>): children}
    </button>
  );
};

export default Button;
