import React from "react";
import clsx from "clsx";

export type WrapperVariant = "full" | "half";

const classesSchema = {
	variant: {
		full: "flex px-[16px] sm:px-[96px] md:px-[144px] lg:px-[136px] xl:px-[224px]",
		half: "px-[16px] md:px-0 pt-[24px] mx-auto md:m-0 half-container",
	},
};

export interface WrapperProps {
	children: React.ReactNode;
	variant?: WrapperVariant;
	className?: string;
}

const Wrapper = ({children, variant, className}: WrapperProps) => {
	const widthVariant = variant ? variant : "full";

	const wrapperClasses = clsx([classesSchema.variant[widthVariant], className]);

	return <div className={wrapperClasses}>{children}</div>;
};

export default Wrapper;
