import React, { useEffect, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Breadcrumbs = () => {
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    const currentPath = window?.location.pathname.replace('/', '');

    const capitalizedPath = `${currentPath
      .charAt(0)
      .toUpperCase()}${currentPath.slice(1)}`;

    setCurrentPath(capitalizedPath);
  }, []);

  return (
    <div className="bg-gray-100 p-4 py-6 text-primary-950">
      {currentPath && (
        <div className="flex items-center gap-2">
          <Link href="/">Home</Link> <ChevronRightIcon className="w-4" />{' '}
          {currentPath}
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
