import { call, put } from 'redux-saga/effects';
import { ROLES_GET_ONE } from './rolesActionTypes';
import * as rolesActions from './rolesActions';
import * as rolesService from './rolesService';

export default function* handleRolesActions(action) {
  const { type, payload } = action;
  switch (type) {
    case ROLES_GET_ONE:
      yield call(getOne, payload.id);
      break;
    default:
      break;
  }
}

function* getOne(id) {
  try {
    const role = yield call(rolesService.getOne, id);
    yield put(rolesActions.getOneSuccess(role));
  } catch (err) {
    console.log(err);
  }
}
