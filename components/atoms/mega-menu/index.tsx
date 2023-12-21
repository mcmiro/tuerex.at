import React from 'react';
import clsx from 'clsx';
import MegaMenuItem from '../mega-menu-item';

const classesSchema = {
  base: 'fixed flex w-full h-auto top-[70px] left-0 bg-primary-100 z-50',
  visible: 'visible',
};

interface ItemProps {
  title: string;
  url: string;
}

interface MenuItemProps {
  title: string;
  menu: [ItemProps[]];
}

export interface MegaMenuProps {
  menuData: MenuItemProps[];
  selectedName?: string;
  className?: string;
}

const MegaMenu = ({ menuData, selectedName, className }: MegaMenuProps) => {
  const megaMenuClasses = clsx([classesSchema.base, className]);

  const megaMenuColumns = menuData.map((items) => {
    if (selectedName !== items.title) return null;

    return items.menu.map((menus, index) => {
      return (
        <div
          key={index}
          className={`flex flex-col w-full py-[32px] px-[32px] border-y border-r last:border-r-0 border-black ${
            index !== 0 ? 'lg:w-7/12' : 'lg:w-5/12'
          }`}
        >
          {menus.map((map, index: number) => {
            return (
              <div key={index} className="pb-[16px]">
                <MegaMenuItem link={map} title={index === 0 && true} />
              </div>
            );
          })}
        </div>
      );
    });
  });

  return <div className={megaMenuClasses}>{megaMenuColumns}</div>;
};

export default MegaMenu;
