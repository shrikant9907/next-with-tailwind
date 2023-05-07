"use client";

import React, { ReactNode } from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  return (
    <button
      className={
        "bg-primary text-sm hover:bg-primaryHover text-white py-3 px-8 rounded-full"
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
