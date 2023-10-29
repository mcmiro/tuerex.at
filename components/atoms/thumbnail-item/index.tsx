import React from "react";
import clsx from "clsx";

const classesSchema = {
	galleryItem:
		"w-[64px] h-[64px] xs:w-[128px] xs:h-[128px] md:w-[72px] md:h-[72px] lg:w-[104px] lg:h-[104px] xl:w-[144px] xl:h-[144px] opacity-50",
	prime: "w-full overflow-hidden m-0 p-0 object-cover",
	selected: "opacity-100",
};

export interface ThumbnailItemProps {
	imageUrl: string;
	prime?: boolean;
	selected?: boolean;
	className?: string;
	onSelect?: () => void;
}

const ThumbnailItem = ({imageUrl, prime, selected, className, onSelect}: ThumbnailItemProps) => {
	const thumbnailItemClasses = clsx([
		!prime && classesSchema.galleryItem,
		prime && classesSchema.prime,
		selected && classesSchema.selected,
		className,
	]);

	return (
		<div className={thumbnailItemClasses} onClick={onSelect}>
			<img src={imageUrl} alt="" className={`w-full h-full object-cover`} />
		</div>
	);
};

export default ThumbnailItem;
