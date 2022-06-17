import React from "react";

interface TextField {
	type: string;
	label?: string;
	className?: string;
	placeholder?: string;
	value: string | undefined;
	name: string;
	onChange: (event: { target: HTMLInputElement }) => void;
}
const TextField: React.VFC<TextField> = ({
	type,
	className,
	placeholder,
	label,
	value,
	name,
	onChange,
	...rest
}) => {
    return (
      <>   
			{
				label?(
					<label 
						className = "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300" >
						{ label } 
					</label>
					) : null }
				
        <input 
					type={type}
					id="default-search" 
					className={`block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`} 
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={(event) => onChange(event)}
					{...rest}/>
  	</>
  );
};

export default TextField;