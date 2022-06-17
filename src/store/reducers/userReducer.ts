import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../hooks/hook";
import { UserInterface } from "../../hooks/userInterface";

// export type InitialStateType = {
// 	users: Array<any>;
// 	user: Array<any>;
// 	loading: boolean;
// 	error: null;
// 	history: Array<any>;
// };
type ActionTypes = UserInterface & {
	type: string;
};
const initialState = {
    users: [],
    user: [],
    loading: false,
    error: null,
    history: []
};

export const fetchUserStart = (state: UserInterface) => {
	return updateObject(state, { loading: true})
};

export const fetchUserStop = (state: UserInterface) => {
	return updateObject(state, { loading: false });
};

export const userError = (state: UserInterface, action: UserInterface) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const getAllUsers = (state: UserInterface, action: UserInterface) => {
    return updateObject(state, {
        users: [...action.users],
        loading: false,
        error: null
    });
};

export const getUser = (state: UserInterface, action: UserInterface) => {
  return updateObject(state, {
    user: [...action.user],
    loading: false,
    error: null
  })
}

const reducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case actionTypes.FETCH_USERS_START:
			return fetchUserStart(state);
		case actionTypes.FETCH_USERS_STOP:
			return fetchUserStop(state);
		case actionTypes.FETCH_USERS:
			return getAllUsers(state, action);
		case actionTypes.GET_USER:
			return getUser(state, action);
		default:
			return state;
	}
};

export default reducer;