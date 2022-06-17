import axios from "axios";
import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes";

export const fetchUserStart = () => {
	return {
		type: actionTypes.FETCH_USERS_START,
	};
};

export const fetchUserStop = () => {
	return {
		type: actionTypes.FETCH_USERS_STOP,
	};
};

export const getAllUsers = (users: Array<any>) => {
	return {
		type: actionTypes.FETCH_USERS,
		users: users,
	};
};

export const getUser = (user: Array<any>) => {
	return {
		type: actionTypes.GET_USER,
		user: user,
	};
};

export const userError = (error: string) => {
    return {
        type: actionTypes.USER_ERROR,
        error: error
    }
}

export const initUsers = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchUserStart());
		await axios
			.get("https://api.github.com/users")
			.then((res) => {
				dispatch(getAllUsers(res.data));
				dispatch(fetchUserStop());
			})
			.catch((err) => dispatch(userError(err)));
	};
};

export const fetchUser = (username: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchUserStart());
		
		await axios
			.get(`https://api.github.com/users/${username}`)
			.then((res) => {
				dispatch(getUser([res.data]));
				dispatch(fetchUserStop());
			})
			.catch((err) => dispatch(userError(err)));
	};
};