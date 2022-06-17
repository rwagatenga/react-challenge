import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Home from "./views/Home"
import * as actions from "./store/actions"

function App(props: any) {
	useEffect(() => {
		props.onFetchUsers();
	}, [props.user]);
	
  return (
		<div
			className="w-full	w-screen bg-white dark:bg-slate-800"
			style={{ height: "60%" }}
		>
			<Home
				users={props.users}
				user={props.user}
				onFetchUser={props.onFetchUser}
				loading={props.loading}
			/>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		users: state.user.users,
		user: state.user.user,
		loading: state.user.loading
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onFetchUsers: () => dispatch(actions.initUsers()),
		onFetchUser: (username: string) => dispatch(actions.fetchUser(username)),
	}
}
export default connect( mapStateToProps, mapDispatchToProps )( App );
