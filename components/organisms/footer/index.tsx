import React, { useEffect, useRef } from 'react';
import { UI } from 'components';
import FooterColumn from './column';
import { footerData } from 'content/footer';
import { useCookies } from 'hooks/use-cookies';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CookieIcon from '../../../assets/icons/cookie.svg';

const classesSchema = {
  base: 'pt-[56px] border-t bg-primary-50',
  content: 'px-4',
  title: 'pt-[32px]',
};

const Footer = () => {
  const cookieWrapper = useRef<HTMLDivElement>(null);
  const copyrightDate = new Date().getFullYear();
  const { functionalCookies, saveFunctionalCookies } = useCookies();

  const handleCookieDialog = () => {
    saveFunctionalCookies('accepted');
    if (cookieWrapper.current !== null) {
      cookieWrapper.current.classList.remove('active');
    }
  };

  useEffect(() => {
    if (cookieWrapper.current !== null) {
      cookieWrapper.current.classList.add('active');
    }
  }, [functionalCookies]);

  return (
    <footer className={classesSchema.base}>
      <UI.Container className={classesSchema.content}>
        <UI.Logo />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 pb-[56px]">
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
      {functionalCookies !== 'accepted' && (
        <div
          ref={cookieWrapper}
          className="fixed left-4 bg-yellow-200 rounded-full py-2 pl-2 pr-6 cookie-wrapper"
        >
          <div
            onClick={handleCookieDialog}
            className="absolute -top-2 -right-2 bg-white rounded-full shadow p-1 cursor-pointer"
          >
            <XMarkIcon className="w-4 h-4" />
          </div>
          <div className="flex gap-2">
            <img src={CookieIcon.src} className="w-6" />
            Wir speichern nur funktionale Cookies!
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
