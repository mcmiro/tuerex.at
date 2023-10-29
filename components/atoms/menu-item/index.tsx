import React from "react";
import clsx from "clsx";
import Button from "../button";

const classesSchema = {
	base: "text-md list-none hover:underline hover:decoration-3 hover:underline-offset-8",
};

export interface MenuItemProps {
	item: {name: string; url?: string | undefined};
	className?: string;
	onHover: (e?: any) => void;
}

const MenuItem = ({item, className, onHover}: MenuItemProps) => {
	const menuItemClasses = clsx([classesSchema.base, className]);
	return (
		<li className={menuItemClasses}>
			<Button variant="text" className="font-normal" onMouseOver={() => onHover(item.name)}>
				{item.name}
			</Button>
		</li>
	);
};

export default MenuItem;
