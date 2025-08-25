import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { UI } from "components";
import clsx from "clsx";

const classesSchema = {
  base: "bg-gray-100 text-primary-950",
  container: "flex items-center gap-2 py-6",
};

export interface BreadcrumbsProps {
  className?: string;
  containerClassName?: string;
}

const Breadcrumbs = ({ className, containerClassName }: BreadcrumbsProps) => {
  const breadcrumbsClasses = clsx([classesSchema.base, className]);
  const containerClasses = clsx([classesSchema.container, containerClassName]);

  const capitalizeEveryWord = (str: string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    const rawPathname = window?.location?.pathname || "";
    // remove leading and trailing slashes
    const trimmedPath = rawPathname.replace(/^\/|\/$/g, "");

    // Special case: /wien/[postal] -> "Schlüsseldienst 1010 Wien"
    const postalMatch = trimmedPath.match(/^wien\/(\d{4})$/i);
    if (postalMatch) {
      setCurrentPath(`Schlüsseldienst ${postalMatch[1]} Wien`);
      return;
    }

    if (!trimmedPath) {
      setCurrentPath("");
      return;
    }

    const capitalizedPath = `${trimmedPath
      .charAt(0)
      .toUpperCase()}${trimmedPath.slice(1)}`;
    const splitPath = capitalizedPath.replace(/-/g, " ");

    setCurrentPath(capitalizeEveryWord(splitPath));
  }, []);

  return (
    <div className={breadcrumbsClasses}>
      {currentPath && (
        <UI.Container className={containerClasses}>
          <Link href="/" className="border-b border-primary-300">
            Home
          </Link>{" "}
          <ChevronRightIcon className="w-4" /> {currentPath}
        </UI.Container>
      )}
    </div>
  );
};

export default Breadcrumbs;
