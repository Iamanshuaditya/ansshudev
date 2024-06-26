import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import { KeyTextField, LinkField } from "@prismicio/client";
import Link from "next/link";

type ButtonProps = {
  linkField?: LinkField | string;
  label: KeyTextField;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
};

function resolveLink(linkField: LinkField | string | undefined): string {
  if (typeof linkField === "string") {
    return linkField;
  } else if (linkField && linkField.link_type) {
    return linkField.link_type;
  }
  return "#";
}

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
  onClick,
}: ButtonProps) {
  const resolvedLink = resolveLink(linkField);

  return (
    <Link
      href={resolvedLink}
      onClick={onClick}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
}
