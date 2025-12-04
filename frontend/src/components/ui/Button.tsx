import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "header" | "contact";
}

const variants = {
  primary:
    "w-auto h-[52px] bg-pr_y text-pr_dg rounded-4xl px-6 py-3 cursor-pointer",
  header:
    "w-auto h-[48px] bg-pr_y text-pr_dg rounded-4xl px-6 py-3 cursor-pointer",
  contact: "",
};

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
