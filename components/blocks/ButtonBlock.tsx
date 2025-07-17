import React from "react";
import Link from "next/link";

export const ButtonBlock = ({
  label,
  url,
  variant = "primary",
  fullWidth = false,
}: {
  label: string;
  url: string;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}) => {
  const baseStyles =
    "inline-block font-medium text-center rounded transition duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const size = fullWidth ? "w-full" : "w-auto";

  return (
    <div className="flex justify-center md:justify-center">
      <Link
        href={url}
        className={`${baseStyles} ${variants[variant]} ${size} px-6 py-2 text-sm md:text-base`}
      >
        {label}
      </Link>
    </div>
  );
};
