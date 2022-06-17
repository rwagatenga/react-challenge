import React from "react";

interface AvatarTypes {
	className?: string;
	src: string;
	alt: string;
}
const Avatar: React.FC<AvatarTypes> = ({
	className,
	src,
	alt
}) => {
	return (
		<>
				<img
					className={`w-10 h-10 rounded-full mt-5 ${className}`}
					src={src}
					alt={alt}
				/>
		</>		
	);
}

export default Avatar;