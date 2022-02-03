export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const ADD_USERS_FETCH = "ADD_USERS_FETCH";
export const ADD_USERS_SUCCESS = "ADD_USERS_SUCCESS";

export const DELETE_USERS_FETCH = "DELETE_USERS_FETCH";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";

export const EDIT_USERS_FETCH = "EDIT_USERS_FETCH";
export const EDIT_USERS_SUCCESS = "EDIT_USERS_SUCCESS";

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});
export const addUserFetch = (name, id) => ({
  type: ADD_USERS_FETCH,
  payload: name,
  id,
});

export const editUserFetch = (id) => ({
  type: EDIT_USERS_FETCH,
  payload: id,
});

export const deleteUserFetch = (id) => {
  return {
    type: DELETE_USERS_FETCH,
    payload: id,
  };
};

export const getUserSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const addUsersSuccess = (name, id) => {
  return {
    type: ADD_USERS_SUCCESS,
    payload: name,
    id,
  };
};

export const deleteUserSuccess = (id) => {
  return {
    type: DELETE_USERS_SUCCESS,
    payload: id,
  };
};
export const editUserSuccess = (id) => ({
  type: EDIT_USERS_SUCCESS,
  payload: id,
});
