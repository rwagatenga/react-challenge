import React from "react";
import Avatar from "../../components/avatar/Avatar";

type ContentCardProps = {
	user: Array<any>;
};
const ContentCard = (props: ContentCardProps) => {
	const { user } = props;
	
	return (
		<div
			className="dark:bg-slate-700 mt-20 w-full rounded-lg text-white"
		>
			{user.length > 0 ? (
				<div className="flex flex-row ">
					<div className="w-1/3">
						<Avatar
							className="h-32 w-32 shadow-lg"
							src={user[0]?.avatar_url ?? ""}
							alt="P"
						/>
					</div>
					<div className="justify-start mt-8 m-5 space-y-2">
						<div>
							Full Name:
							<span className="m-5 text-lg font-semibold">
								{user[0]?.name ?? ""}
							</span>
						</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							Username:
							<span className="m-5 text-base">{user[0]?.login ?? ""}</span>
						</div>
						<div>
							Company:
							<span className="m-5 text-base">{user[0]?.company ?? ""}</span>
						</div>
						<div>
							Location:
							<span className="m-5 text-base">{user[0]?.location ?? ""}</span>
						</div>
						<div>
							Website:
							<a
								href={user[0]?.blog ?? "#"}
								className="m-5 text-base text-blue-300 hover:text-indigo-400"
								target="_blank"
							>
								{user[0]?.blog ?? ""}
							</a>
						</div>
						<div>
							Biography:
							<span className="m-5 text-base text-gray-500 dark:text-gray-400">
								{user[0]?.bio ?? ""}
							</span>
						</div>
						<div>
							Followers:
							<span className="m-5 text-base">{user[0]?.followers ?? ""}</span>
						</div>
						<div>
							Following:
							<span className="m-5 text-base">{user[0]?.following ?? ""}</span>
						</div>
						<div>
							Repositories:
							<span className="m-5 text-base">
								{user[0]?.public_repos ?? ""}
							</span>
						</div>
						<div>
							Gists:
							<span className="m-5 text-base">
								{user[0]?.public_gists ?? ""}
							</span>
						</div>
						<div>
							Visit:
							<a
								href={user[0]?.html_url ?? "#"}
								className="m-5 text-base text-blue-300 hover:text-indigo-400"
							>
								{user[0]?.html_url ?? ""}
							</a>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default ContentCard;
