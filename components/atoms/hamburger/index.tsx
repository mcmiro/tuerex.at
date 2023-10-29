import React from "react";
import Button from "../button";

const classesSchema = {
	base: "flex md:hidden items-center justify-center px-0 py-0 text-black ml-4 mt-1",
	icon: "block w-6 h-6",
};

export interface HamburgerProps {
	isActive: boolean;
	onToggleMenu: (e?: any) => void;
}

const Hamburger = ({isActive, onToggleMenu}: HamburgerProps) => {
	return (
		<Button
			onClick={() => onToggleMenu(!isActive)}
			type="button"
			className={classesSchema.base}
			aria-controls="mobile-menu"
			aria-expanded="false"
		>
			{!isActive ? (
				<svg
					className={classesSchema.icon}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			) : (
				<svg
					className={classesSchema.icon}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			)}
		</Button>
	);
};

export default Hamburger;
