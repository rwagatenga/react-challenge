import React from "react";
import Card from "../../components/card/Card";
import CodeIcon from "../../icons/CodeIcon";
import RepoIcon from "../../icons/RepoIcon";
import UserIcon from "../../icons/UserIcon";
import UsersIcon from "../../icons/UsersIcon";

type TopCardProps = {
	user: Array<any>;
}
const TopCard = (props: TopCardProps) => {
	const { user } = props;
    return (
			<div className="flex md:flex-row flex-col space-x-5 w-full h-24 text-white">
				<Card className="dark:bg-slate-700 w-full">
					<div className="flex flex-row space-x-20">
						<div>
							<RepoIcon />
						</div>
						<div className="justify-start">
							<h4 className="text-center font-semibold text-xl">
								{user[0]?.public_repos ?? 0}
							</h4>
							<span className="text-gray-400">Repo</span>
						</div>
					</div>
				</Card>
				<Card className="dark:bg-slate-700 w-full">
					<div className="flex flex-row space-x-20">
						<div>
							<UserIcon />
						</div>
						<div className="justify-start">
							<h4 className="text-center font-semibold text-xl">
								{user[0]?.following ?? 0}
							</h4>
							<span className="text-gray-400">Following</span>
						</div>
					</div>
				</Card>
				<Card className="dark:bg-slate-700 w-full">
					<div className="flex flex-row space-x-20">
						<div>
							<UsersIcon />
						</div>
						<div className="justify-start">
							<h4 className="text-center font-semibold text-xl">
								{user[0]?.followers ?? 0}
							</h4>
							<span className="text-gray-400">Followers</span>
						</div>
					</div>
				</Card>
				<Card className="dark:bg-slate-700 w-full">
					<div className="flex flex-row space-x-20">
						<div>
							<CodeIcon />
						</div>
						<div className="justify-start">
							<h4 className="text-center font-semibold text-xl">
								{user[0]?.public_gists ?? 0}
							</h4>
							<span className="text-gray-400">Gists</span>
						</div>
					</div>
				</Card>
			</div>
		);
}

export default TopCard;