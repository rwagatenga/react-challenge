import React from "react";
const Header = () => {
    return (
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
				<div className="container flex flex-wrap justify-between items-center mx-auto m-5">
					<a href="/" className="flex items-center">
						<img
							src={"images/GitHub-Mark-Light-64px.png"}
							className="mr-3 h-6 sm:h-9"
							alt="GitHub Logo"
						/>
						<img
							src={"/images/GitHub_Logo_White.png"}
							className="mr-3 h-8 sm:h-9 self-center text-xl font-semibold whitespace-nowrap dark:text-white"
							alt="GitHub Logo"
						/>
					</a>
				</div>
			</nav>
		);
};

export default Header;