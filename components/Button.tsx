import React from "react";
import styles from "../styles/Button.module.scss";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  type,
}) => {
  return (
    <button
      className={`${styles["btn-gradient"]} ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
