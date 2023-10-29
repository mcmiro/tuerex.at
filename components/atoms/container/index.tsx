import React from "react";
import clsx from "clsx";

const classesSchema = {
	base: "flex gap-10 px-4 lg:px-[136px]",
};

export interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container = ({children, className}: ContainerProps) => {
	const containerClasses = clsx([classesSchema.base, className]);

	return <div className={containerClasses}>{children}</div>;
};

export default Container;
