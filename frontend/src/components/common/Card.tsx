import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  width = "360px",
  height = "fit-content",
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <div
      className={cn(
        " rounded-bl-3xl rounded-tr-3xl bg-white p-6 text-pr_dg ",
        className
      )}
      style={{ width, height, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
