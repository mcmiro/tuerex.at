import React from "react";
import clsx from "clsx";

const classesSchema = {
	base: "",
	title: "font-semibold text-black inline-block",
};

export interface MenuLink {
	title: string;
	url: string;
}

export interface MegaMenuItemProps {
	link: MenuLink;
	title?: boolean;
	className?: string;
}

// eslint-disable-next-line react/display-name
const MegaMenuItem = ({link, title, className}: MegaMenuItemProps) => {
	const megaMenuItemTitleClasses = clsx([
		classesSchema.base,
		!title && "text-gray-700",
		title && classesSchema.title,
		className,
	]);

	const menuLinkItem = (link: any) => {
		return (
			<a href={link.url ?? ""} className={megaMenuItemTitleClasses}>
				{link.title}
			</a>
		);
	};

	const menuTextItem = (link: any) => {
		return <div className={megaMenuItemTitleClasses}>{link.title}</div>;
	};

	return <div>{title ? menuTextItem(link) : menuLinkItem(link)}</div>;
};

export default MegaMenuItem;
