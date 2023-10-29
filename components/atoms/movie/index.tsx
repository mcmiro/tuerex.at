/* eslint-disable react/display-name */
import React from "react";

export interface MovieProps {
	file: string;
	id?: string;
	className?: string;
}

const Movie = React.forwardRef(
	({file, id, className}: MovieProps, ref: React.LegacyRef<HTMLVideoElement> | undefined) => {
		return (
			<video ref={ref} id={`${id}` ?? "video"} muted className={className} preload="auto" playsInline>
				<source src={file} type="video/mp4" />
			</video>
		);
	}
);

export default Movie;
