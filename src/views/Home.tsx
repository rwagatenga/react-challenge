import React, { useState } from "react";

import Button from "../components/button/Button";
import Header from "../components/header/Header";
import SearchIcon from "../icons/SearchIcon";
import TextField from "../components/inputs/TextField";
import TopCard from "../layouts/topcard/TopCard";
import SideCard from "../layouts/sidecard/SideCard";
import ContentCard from "../layouts/contents/ContentCard";
import Skeleton from "../components/skeleton/Skeleton";

type HomeProps = {
	users: Array<any>;
	user: Array<any>;
	loading: boolean;
	onFetchUser: (username: string) => void;
};
const Home = (props: HomeProps) => {
	const [search, setSearch] = useState<string>('');

	const searchHandler = (event: { target: HTMLInputElement; }) => {
		setSearch(event.target.value);
	}
	const searchSubmit = (event: React.FormEvent, username: string) => {
		event.preventDefault();
		props.onFetchUser(username)
		setSearch('');
	}
	console.log("LO", props.loading);
	
  return (
		<div className="md:container md:mx-auto dark:bg-slate-800 justify-start">
			<Header />
			<div className="flex flex-row gap-4">
				<div className="basis-10/12">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							searchSubmit(e, search);
						}}
					>
						<div className="relative md:w-2/3 sm:w-3/4 m-2 mt-10 mb-10">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<SearchIcon />
							</div>
							<TextField
								type="search"
								name="search"
								placeholder="Search GitHub User ..."
								value={search}
								onChange={(event) => searchHandler(event)}
							/>
							<Button name="Search" />
						</div>
					</form>
					<div className="flex flex-row">
						<TopCard user={props.user} />
					</div>
					{props.loading ? (
						<Skeleton />
					) : (
						<ContentCard user={props.user} />
					)}
				</div>
				{props.loading ? (
					<Skeleton />
				) : (
					<SideCard users={props.users} onFetchUser={props.onFetchUser} />
				)}
			</div>
		</div>
	);
}

export default Home;