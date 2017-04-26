import { takeEvery, call } from 'redux-saga/effects';
import handleCompaniesActions from '../companies/companiesSaga';
import handleRolesActions from '../roles/rolesSaga';

export default function* rootSaga() {
  yield takeEvery('*', sagaRouter);
}

function* sagaRouter(action) {
  const resource = getResourceFromType(action);
  switch (resource) {
    case 'COMPANIES':
      yield call(handleCompaniesActions, action);
      break;
    case 'ROLES':
      yield call(handleRolesActions, action);
      break;
    default:
      break;
  }
}

function getResourceFromType(action) {
  return action.type.slice(0, action.type.indexOf('_'));
}
