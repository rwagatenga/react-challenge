import React from "react";
import Avatar from "../../components/avatar/Avatar";
import Card from "../../components/card/Card";

type SideCardProps = {
	users: Array<any>;
	onFetchUser: (username: string) => void;
};
const SideCard = (props: SideCardProps) => {
	return (
		<div className="mt-10 mb-10 basic-1/5">
			<Card
				className="dark:bg-slate-700 w-96 space-x-4 m-5 mt-1 text-white"
				style={{ height: "22%" }}
			>
				<h4 className="text-center font-semibold text-xl">GitHub Users</h4>
				<div className="grid grid-cols-1 divide-y space-y-5 overflow-auto h-full">
					{props.users
						? props.users.map((user, index) => (
								<button
									className="flex items-center space-x-4 space-y-8"
									key={index}
									onClick={(e) => props.onFetchUser(user.login)}
								>
									<Avatar src={user.avatar_url} alt="P" />
									<div className="space-y-1 font-medium dark:text-white justify-start items-start">
										<div>{user.login}</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											{user.url}
										</div>
									</div>
								</button>
						  ))
						: null}
					<div className="flex items-center space-x-4 space-y-8">
						<Avatar
							src="https://avatars.githubusercontent.com/u/17?v=4"
							alt="P"
						/>
						<div className="space-y-1 font-medium dark:text-white">
							<div>Jese Leos</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								Joined in August 2014
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default SideCard;