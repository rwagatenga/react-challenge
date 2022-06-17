import React from "react";

interface cardProps {
	children: React.ReactNode;
	className?: string;
	style?: Object;
}
const Card: React.FC<cardProps> = ({ children, className, style, ...rest }) => {
	
    return (
			<div className="flex justify-start" style={style}>
				<div className={ `block p-6 rounded-lg shadow-lg bg-white max-w-sm ${className}`} {...rest}>
					{children}
				</div>
			</div>
		);
};

export default Card;