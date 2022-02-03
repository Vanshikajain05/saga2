import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import {
  getUserSuccess,
  GET_USERS_FETCH,
  addUsersSuccess,
  ADD_USERS_FETCH,
  DELETE_USERS_FETCH,
  EDIT_USERS_FETCH,
  deleteUserSuccess,
  editUserSuccess,
} from "../Data/Action";
import { userapi, addUserApi, delUserApi, editUserApi } from "../api/user_api";

function* workGetUsersFetch() {
  try {
    const users = yield call(userapi);
    yield put(getUserSuccess(users));
  } catch (e) {
    console.log(e);
  }
}

function* postSaga({ payload }) {
  try {
    const users = yield call(addUserApi, payload);
    yield put(addUsersSuccess(users));
  } catch (e) {
    console.log(e);
  }
}

function* delSaga({ payload }) {
  try {
    const users = yield call(delUserApi, payload);
    console.log("users ", users);
    if (users.status === 200) {
      yield put(deleteUserSuccess(payload));
    } else {
      console.log(users);
    }
  } catch (e) {
    console.log(e);
  }
}

function* EditsuccessSaga({ payload }) {
  try {
    const users = yield call(editUserApi, payload);
    console.log("users ", users);
    if (users.status === 200) {
      yield put(editUserSuccess(payload));
    } else {
      console.log(users);
    }
  } catch (e) {
    console.log(e);
  }
}

const mysagas = [fork(mySaga), fork(addSaga), fork(deleteSaga), fork(editSaga)];
function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}
function* addSaga() {
  yield takeEvery(ADD_USERS_FETCH, postSaga);
}

function* editSaga() {
  yield takeEvery(EDIT_USERS_FETCH, EditsuccessSaga);
}

function* deleteSaga() {
  yield takeEvery(DELETE_USERS_FETCH, delSaga);
}

function* allSaga() {
  yield all([...mysagas]);
}
export default allSaga;
