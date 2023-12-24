import React, { useEffect, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { UI } from 'components';
import clsx from 'clsx';

const classesSchema = {
  base: 'bg-gray-100 text-primary-950',
  container: 'flex items-center gap-2 py-6',
};

interface BreadcrumbsProps {
  className?: string;
  containerClassName?: string;
}

const Breadcrumbs = ({ className, containerClassName }: BreadcrumbsProps) => {
  const breadcrumbsClasses = clsx([classesSchema.base, className]);
  const containerClasses = clsx([classesSchema.container, containerClassName]);

  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    const currentPath = window?.location.pathname.replace('/', '');

    const capitalizedPath = `${currentPath
      .charAt(0)
      .toUpperCase()}${currentPath.slice(1)}`;

    setCurrentPath(capitalizedPath);
  }, []);

  return (
    <div className={breadcrumbsClasses}>
      {currentPath && (
        <UI.Container className={containerClasses}>
          <Link href="/" className="border-b border-primary-300">
            Home
          </Link>{' '}
          <ChevronRightIcon className="w-4" /> {currentPath}
        </UI.Container>
      )}
    </div>
  );
};

export default Breadcrumbs;
