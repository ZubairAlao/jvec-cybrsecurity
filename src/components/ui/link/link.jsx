import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/utils/cn";

export const Link = ({ className, children, ...props }) => {
    return (
      <RouterLink
        className={cn('cursor-pointer', className)}
        {...props}
      >
        {children}
      </RouterLink>
    );
  };