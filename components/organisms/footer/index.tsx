import React from 'react';
import Link from 'next/link';
import { UI } from 'components';

const classesSchema = {
  base: 'bg-primary-100',
  content: 'px-4',
  title: 'pt-[32px]',
};

const Footer = () => {
  const copyrightDate = new Date().getFullYear();

  return (
    <footer className={classesSchema.base}>
      <div className={classesSchema.content}>
        <UI.Typography
          variant="h4"
          className={classesSchema.title}
          weight="extraThin"
        >
          Reusing the ressources
        </UI.Typography>
        <UI.Typography variant="md" className="py-[32px]">
          © türex {copyrightDate} <Link href="/data-privacy">Datenschutz</Link>
        </UI.Typography>
      </div>
    </footer>
  );
};

export default Footer;
