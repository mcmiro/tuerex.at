import React from "react";
import clsx from "clsx";

const classesSchema = {
	base: "w-6 h-[1px]",
	standard: "bg-gray-200",
	active: "w-6 h-[1px] bg-black transition duration-300 ease-in-out",
};

export interface ThumbnailDotsProps {
	isActive?: boolean;
}

const ThumbnailDots = ({isActive}: ThumbnailDotsProps) => {
	const thumbnailDotsClasses = clsx([
		classesSchema.base,
		!isActive && classesSchema.standard,
		isActive && classesSchema.active,
	]);

	return <div className={thumbnailDotsClasses}></div>;
};

export default ThumbnailDots;
