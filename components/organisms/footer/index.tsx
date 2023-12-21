import React from 'react';
import { UI } from 'components';
import FooterColumn from './column';
import { footerData } from 'content/footer';

const classesSchema = {
  base: 'pt-[56px]',
  content: 'px-4',
  title: 'pt-[32px]',
};

const Footer = () => {
  const copyrightDate = new Date().getFullYear();

  return (
    <footer className={classesSchema.base}>
      <UI.Container className={classesSchema.content}>
        <UI.Logo />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {footerData.map((group: any, index: number) => {
            return (
              <div key={index} className="pb-8">
                <UI.Typography
                  variant="md"
                  weight="semibold"
                  className="!text-[20px] font-[lexend]"
                >
                  {group.title}
                </UI.Typography>
                <FooterColumn items={group.menu} />
              </div>
            );
          })}
        </div>
      </UI.Container>
      <div className="bg-primary-950 w-full">
        <UI.Container>
          <UI.Typography variant="md" className="py-[16px] text-white">
            © Copyright© {copyrightDate} Türex. Alle Rechte vorbehalten.
          </UI.Typography>
        </UI.Container>
      </div>
    </footer>
  );
};

export default Footer;
