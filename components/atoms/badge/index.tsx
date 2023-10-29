import React from "react";
import clsx from "clsx";

const classesSchema = {
	base: "flex items-center justify-center w-[18px] h-[18px] leading-[1] bg-black text-white text-[12px] rounded-full right-[-14px]",
};

export interface BadgeProps {
	value: number;
	className?: string;
}

const Badge = ({value, className}: BadgeProps) => {
	const badgeClasses = clsx([classesSchema.base, className]);

	return (
		<div className={badgeClasses}>
			<span>{value}</span>
		</div>
	);
};

export default Badge;
