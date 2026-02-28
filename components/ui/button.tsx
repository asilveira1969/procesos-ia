import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils/classnames";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        variant === "primary" &&
          "bg-brand text-white shadow-[0_16px_40px_rgba(16,35,63,0.18)] hover:-translate-y-0.5 hover:bg-[#17335c]",
        variant === "secondary" &&
          "border border-line bg-white text-brand hover:border-brand hover:bg-brand-soft",
        variant === "ghost" && "text-brand hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
