import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: "_blank" | "_self";
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  whatsapp: "btn-whatsapp",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  target,
  className = "",
}: ButtonProps) {
  const combinedStyles = `${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}