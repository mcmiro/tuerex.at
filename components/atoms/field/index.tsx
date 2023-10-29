import React from "react";
import clsx from "clsx";

const classesSchema = {
	base: "w-full",
};

export interface FieldProps {
	gap?: number;
	children?: React.ReactNode;
	className?: string;
}

const Field = ({gap, children, className}: FieldProps) => {
	const fieldClasses = clsx([classesSchema.base, gap && `gap-${gap}`, className]);

	return <div className={fieldClasses}>{children}</div>;
};

export default Field;
